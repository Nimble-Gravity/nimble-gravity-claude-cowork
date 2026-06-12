/*
 * interactive.js — client-only workshop interactivity (quizzes + maturity poll).
 *
 * Self-contained IIFE that injects its own CSS, then scans the page for mount
 * points and hydrates them. No backend, no network: all state lives in
 * localStorage under a single versioned key. Cross-cohort aggregation is out of
 * scope (would need a backend) — the maturity poll shows each attendee only
 * their own answer; the facilitator tallies the room live.
 *
 * Author API (drop a placeholder div; this script fills it):
 *   <div class="ix-quiz" data-ix-quiz="m1" data-ix-pass="3"></div>
 *   <div class="ix-poll" data-ix-poll="maturity"></div>
 *   <div class="ix-readout"></div>
 *
 * Slides-safety: mount classes (ix-*) and everything rendered inside are NOT any
 * of the 9 card classes slides-engine.js extracts, so widgets never leak onto a
 * deck. Place a widget in a <div class="section"> WITHOUT an h2.sec-title and the
 * engine generates no slide for it at all (the widget renders its own heading).
 */
(function () {
  'use strict';

  var LS_KEY = 'ng-cowork:v1';

  // ── Storage layer (self-healing; survives private-mode / disabled storage) ──
  function getStore() {
    try {
      var v = JSON.parse(window.localStorage.getItem(LS_KEY));
      return (v && typeof v === 'object') ? v : {};
    } catch (e) { return {}; }
  }
  function setStore(s) {
    try {
      s.meta = { version: 1 };
      window.localStorage.setItem(LS_KEY, JSON.stringify(s));
      return true;
    } catch (e) { return false; }
  }
  function saveQuiz(id, result) { var s = getStore(); s.quiz = s.quiz || {}; s.quiz[id] = result; setStore(s); }
  function getQuiz(id)          { var s = getStore(); return (s.quiz || {})[id] || null; }
  function savePoll(id, value)  { var s = getStore(); s.poll = s.poll || {}; s.poll[id] = { value: value, ts: Date.now() }; setStore(s); }
  function getPoll(id)          { var s = getStore(); return (s.poll || {})[id] || null; }
  function resetAll()           { try { window.localStorage.removeItem(LS_KEY); } catch (e) {} }

  // ── Content config (questions live here, not in lesson HTML) ────────────────
  var QUIZZES = {
    m1: {
      label: 'Module 1 · Setup & Foundations',
      questions: [
        { q: 'How is Cowork different from a chat?',
          options: ['It just writes longer replies', 'You delegate a multi-step job and supervise while it does the work', 'It only works offline'],
          answer: 1 },
        { q: 'Where does Claude Cowork run your work?',
          options: ['On a public website', 'Locally on your machine in an isolated VM, on the folders you grant it', 'Only in the cloud with no local access'],
          answer: 1 },
        { q: 'What does the co-setup interview produce?',
          options: ['A new email account', 'About-me / instruction context files that personalize Cowork', 'A billing invoice'],
          answer: 1 },
        { q: 'When do you route work to Copilot Cowork instead of Claude Cowork?',
          options: ['Never', 'When the work is regulated and needs in-tenant audit coverage', 'Only for personal errands'],
          answer: 1 }
      ]
    },
    m2: {
      label: 'Module 2 · Use Cowork',
      questions: [
        { q: 'What is the safe default model for everyday work?',
          options: ['Opus for everything', 'Sonnet, stepping up to Opus only for hard reasoning', 'Haiku only'],
          answer: 1 },
        { q: 'Before running a task, what should you connect?',
          options: ['Your whole hard drive', 'Only the folder the task needs', 'Nothing — Cowork guesses'],
          answer: 1 },
        { q: 'What makes a strong first use case?',
          options: ['A one-off creative poem', 'A repetitive, document-heavy job that ends in a deliverable', 'Anything that needs no files'],
          answer: 1 },
        { q: 'What standing risk comes with untrusted external content?',
          options: ['Prompt injection', 'The app running too fast', 'Too many fonts'],
          answer: 0 }
      ]
    },
    m3: {
      label: 'Module 3 · Build a Skill',
      questions: [
        { q: 'What comes first when authoring a skill, per Anthropic?',
          options: ['The marketing copy', 'The evaluations — evals before docs', 'The logo'],
          answer: 1 },
        { q: 'A good SKILL.md body should be…',
          options: ['As long as possible', 'Under 500 lines, using progressive disclosure', 'A single sentence'],
          answer: 1 },
        { q: 'What makes a description trigger reliably?',
          options: ['It is vague and short', 'It is keyword-rich and written in the third person', 'It is written in the first person'],
          answer: 1 },
        { q: 'The fastest way to start a skill from working text is to…',
          options: ['Rewrite everything from scratch', 'Paste the working prompt and ask Claude to turn it into a skill', 'Email it to support'],
          answer: 1 }
      ]
    },
    m4: {
      label: 'Module 4 · Plugins & Rollout',
      questions: [
        { q: 'Several people build the same skill. That is a signal to…',
          options: ['Ban the skill', 'Make it a team plugin with one owner', 'Delete every copy'],
          answer: 1 },
        { q: 'As of June 2026, where is Claude Cowork activity NOT captured?',
          options: ['In your local history', 'In Anthropic’s Compliance API / audit logs', 'In the desktop app'],
          answer: 1 },
        { q: 'Regulated workloads that need audit coverage should route to…',
          options: ['Claude Cowork only', 'Copilot Cowork — in-tenant, Purview-audited', 'A personal account'],
          answer: 1 },
        { q: 'Which three questions track adoption?',
          options: ['Are people using it? How deeply? Is it paying off?', 'Weather, time, and date?', 'None — adoption cannot be measured'],
          answer: 0 }
      ]
    }
  };

  var POLLS = {
    maturity: {
      title: 'Where are you on the AI maturity scale?',
      levels: [
        { title: 'Curious',   desc: 'Not really using AI for work yet.' },
        { title: 'Exploring', desc: 'Trying chat tools ad hoc, no real workflow yet.' },
        { title: 'Piloting',  desc: 'Delegating some real work — maybe a first skill.' },
        { title: 'Scaling',   desc: 'Teams using it regularly on real deliverables.' },
        { title: 'Governed',  desc: 'Managed, measured, and governed across the org.' }
      ]
    }
  };

  // ── Styles ──────────────────────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById('cowork-ix-styles')) return;
    var s = document.createElement('style');
    s.id = 'cowork-ix-styles';
    s.textContent = [
      '.ix-quiz,.ix-poll,.ix-readout{margin-top:28px;}',
      '.ix-card{border:1px solid var(--border);border-radius:14px;background:var(--white);padding:26px 28px;box-shadow:0 4px 18px rgba(33,15,54,.05);}',
      '.ix-kicker{font-family:\'Roboto Mono\',monospace;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--violet);}',
      '.ix-card-title{font-size:20px;font-weight:600;color:var(--navy);margin:6px 0 2px;line-height:1.25;}',
      '.ix-card-sub{font-size:14px;color:var(--slate);margin:0;}',
      '.ix-q{margin-top:20px;}',
      '.ix-q-text{font-size:15px;font-weight:600;color:var(--navy);margin-bottom:10px;}',
      '.ix-opts{display:flex;flex-direction:column;gap:8px;}',
      '.ix-opt{display:flex;align-items:center;gap:11px;text-align:left;width:100%;padding:11px 14px;border:1px solid var(--border);border-radius:10px;background:var(--off);color:var(--slate);font-size:14px;font-family:inherit;line-height:1.45;cursor:pointer;transition:border-color .15s,background .15s,color .15s;}',
      '.ix-opt:hover{border-color:var(--mint-on-dark);}',
      '.ix-opt:disabled{cursor:default;}',
      '.ix-opt.selected{border-color:var(--teal);background:rgba(47,107,102,.08);color:var(--navy);font-weight:600;}',
      '.ix-opt.correct{border-color:var(--mint-on-dark);background:rgba(64,140,132,.16);color:var(--navy);font-weight:600;}',
      '.ix-opt.incorrect{border-color:var(--ember);background:rgba(196,59,49,.10);color:var(--navy);}',
      '.ix-mark{flex:0 0 auto;width:18px;height:18px;border-radius:50%;border:2px solid #c3c2cf;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;}',
      '.ix-opt.selected .ix-mark{border-color:var(--teal);background:var(--teal);}',
      '.ix-opt.correct .ix-mark{border-color:var(--mint-on-dark);background:var(--mint-on-dark);}',
      '.ix-opt.incorrect .ix-mark{border-color:var(--ember);background:var(--ember);}',
      '.ix-actions{margin-top:22px;display:flex;align-items:center;gap:14px;flex-wrap:wrap;}',
      '.ix-btn{background:var(--teal);color:var(--white);border:none;padding:10px 20px;min-height:40px;border-radius:8px;font-size:14px;font-weight:600;font-family:inherit;letter-spacing:.3px;cursor:pointer;transition:background .2s,box-shadow .2s;box-shadow:0 2px 8px rgba(33,15,54,.12);}',
      '.ix-btn:hover{background:var(--mint);}',
      '.ix-btn--ghost{background:transparent;color:var(--teal);border:1px solid var(--border);box-shadow:none;}',
      '.ix-btn--ghost:hover{background:transparent;border-color:var(--mint);color:var(--mint);}',
      '.ix-hint{font-size:13px;color:var(--slate);}',
      '.ix-result{margin-top:20px;padding:14px 16px;border-radius:10px;font-size:15px;display:flex;align-items:center;gap:10px;line-height:1.4;}',
      '.ix-result.pass{background:rgba(64,140,132,.12);border:1px solid rgba(64,140,132,.32);color:var(--teal);}',
      '.ix-result.fail{background:var(--amberL);border:1px solid rgba(232,163,23,.32);color:var(--amber-accessible);}',
      '.ix-result-badge{font-size:18px;}',
      '.ix-done{display:flex;align-items:center;gap:16px;flex-wrap:wrap;}',
      '.ix-done-icon{flex:0 0 auto;width:44px;height:44px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:22px;color:#fff;background:var(--mint-on-dark);}',
      '.ix-done-icon.fail{background:var(--amber);}',
      '.ix-done-copy{flex:1 1 220px;min-width:0;}',
      '.ix-done-title{font-size:17px;font-weight:600;color:var(--navy);}',
      '.ix-done-sub{font-size:14px;color:var(--slate);margin-top:2px;}',
      // poll
      '.ix-scale{display:flex;flex-direction:column;gap:10px;margin-top:18px;}',
      '.ix-level{display:flex;align-items:flex-start;gap:14px;width:100%;text-align:left;padding:13px 16px;border:1px solid var(--border);border-radius:12px;background:var(--off);font-family:inherit;cursor:pointer;transition:border-color .15s,background .15s,transform .1s;}',
      '.ix-level:hover{border-color:var(--violet);}',
      '.ix-level.selected{border-color:var(--violet);background:rgba(140,71,228,.08);}',
      '.ix-level-num{flex:0 0 auto;width:26px;height:26px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font-family:\'Roboto Mono\',monospace;font-size:12px;font-weight:700;color:var(--violet);background:rgba(140,71,228,.12);}',
      '.ix-level.selected .ix-level-num{color:#fff;background:var(--violet);}',
      '.ix-level-title{font-size:15px;font-weight:600;color:var(--navy);}',
      '.ix-level-desc{font-size:13px;color:var(--slate);margin-top:2px;}',
      '.ix-poll-note{margin-top:14px;font-size:13px;color:var(--slate);font-style:italic;}',
      // readout
      '.ix-readout-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;}',
      '.ix-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;font-size:13px;font-weight:600;border:1px solid var(--border);background:var(--off);color:var(--slate);}',
      '.ix-pill.on{border-color:rgba(64,140,132,.4);background:rgba(64,140,132,.12);color:var(--teal);}',
      '.ix-note{margin-top:16px;font-size:13px;color:var(--slate);line-height:1.6;}'
    ].join('');
    document.head.appendChild(s);
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // ── Quiz ────────────────────────────────────────────────────────────────────
  function renderQuiz(mount) {
    var id = mount.getAttribute('data-ix-quiz');
    var cfg = QUIZZES[id];
    if (!cfg) return;
    var total = cfg.questions.length;
    var pass = parseInt(mount.getAttribute('data-ix-pass'), 10);
    if (isNaN(pass)) pass = Math.ceil(total * 0.6);

    var saved = getQuiz(id);
    if (saved) { renderQuizDone(mount, id, cfg, saved, pass); }
    else { renderQuizForm(mount, id, cfg, total, pass); }
  }

  function renderQuizForm(mount, id, cfg, total, pass) {
    mount.innerHTML = '';
    var card = el('div', 'ix-card');
    card.appendChild(el('div', 'ix-kicker', 'Knowledge check · ' + cfg.label));
    card.appendChild(el('div', 'ix-card-title', 'Quick check — reinforce the essentials'));
    card.appendChild(el('p', 'ix-card-sub', 'A few easy questions. Pick an answer for each, then check.'));

    var selected = new Array(total).fill(-1);
    var qNodes = [];

    cfg.questions.forEach(function (qcfg, qi) {
      var qWrap = el('div', 'ix-q');
      qWrap.appendChild(el('div', 'ix-q-text', (qi + 1) + '. ' + qcfg.q));
      var opts = el('div', 'ix-opts');
      var optBtns = [];
      qcfg.options.forEach(function (optText, oi) {
        var b = el('button', 'ix-opt');
        b.type = 'button';
        b.appendChild(el('span', 'ix-mark'));
        b.appendChild(el('span', null, optText));
        b.addEventListener('click', function () {
          selected[qi] = oi;
          optBtns.forEach(function (ob, k) { ob.classList.toggle('selected', k === oi); });
        });
        optBtns.push(b);
        opts.appendChild(b);
      });
      qWrap.appendChild(opts);
      qNodes.push({ optBtns: optBtns });
      card.appendChild(qWrap);
    });

    var actions = el('div', 'ix-actions');
    var checkBtn = el('button', 'ix-btn', 'Check answers');
    checkBtn.type = 'button';
    var hint = el('span', 'ix-hint', '');
    actions.appendChild(checkBtn);
    actions.appendChild(hint);
    card.appendChild(actions);

    checkBtn.addEventListener('click', function () {
      if (selected.indexOf(-1) !== -1) { hint.textContent = 'Answer all questions first.'; return; }
      hint.textContent = '';
      var score = 0;
      cfg.questions.forEach(function (qcfg, qi) {
        var btns = qNodes[qi].optBtns;
        btns.forEach(function (b, oi) {
          b.disabled = true;
          b.classList.remove('selected');
          if (oi === qcfg.answer) b.classList.add('correct');
          else if (oi === selected[qi]) b.classList.add('incorrect');
        });
        if (selected[qi] === qcfg.answer) score++;
      });
      var passed = score >= pass;
      saveQuiz(id, { passed: passed, score: score, total: total, ts: Date.now() });
      checkBtn.remove();
      hint.remove();
      var res = el('div', 'ix-result ' + (passed ? 'pass' : 'fail'));
      res.appendChild(el('span', 'ix-result-badge', passed ? '✓' : '↻'));
      res.appendChild(el('span', null, passed
        ? 'You passed — ' + score + '/' + total + '. Nice work.'
        : 'You got ' + score + '/' + total + '. Review the highlights above, then retake.'));
      card.appendChild(res);
      var again = el('button', 'ix-btn ix-btn--ghost', 'Retake');
      again.type = 'button';
      again.style.marginTop = '16px';
      again.addEventListener('click', function () { renderQuizForm(mount, id, cfg, total, pass); });
      card.appendChild(again);
    });

    mount.appendChild(card);
  }

  function renderQuizDone(mount, id, cfg, saved, pass) {
    mount.innerHTML = '';
    var card = el('div', 'ix-card');
    card.appendChild(el('div', 'ix-kicker', 'Knowledge check · ' + cfg.label));
    var done = el('div', 'ix-done');
    var icon = el('div', 'ix-done-icon' + (saved.passed ? '' : ' fail'), saved.passed ? '✓' : '↻');
    done.appendChild(icon);
    var copy = el('div', 'ix-done-copy');
    copy.appendChild(el('div', 'ix-done-title', saved.passed ? 'Module complete' : 'Not passed yet'));
    copy.appendChild(el('div', 'ix-done-sub', 'Your score: ' + saved.score + '/' + saved.total + '.'));
    done.appendChild(copy);
    card.appendChild(done);
    var actions = el('div', 'ix-actions');
    var retake = el('button', 'ix-btn ix-btn--ghost', 'Retake');
    retake.type = 'button';
    retake.addEventListener('click', function () {
      renderQuizForm(mount, id, cfg, cfg.questions.length, pass);
    });
    actions.appendChild(retake);
    card.appendChild(actions);
    mount.appendChild(card);
  }

  // ── Maturity poll (client-only — shows only your own answer) ────────────────
  function renderPoll(mount) {
    var id = mount.getAttribute('data-ix-poll') || 'maturity';
    var cfg = POLLS[id];
    if (!cfg) return;
    mount.innerHTML = '';
    var card = el('div', 'ix-card');
    card.appendChild(el('div', 'ix-kicker', 'Live poll'));
    card.appendChild(el('div', 'ix-card-title', cfg.title));
    card.appendChild(el('p', 'ix-card-sub', 'Pick the one that fits you best today.'));

    var saved = getPoll(id);
    var scale = el('div', 'ix-scale');
    var btns = [];
    cfg.levels.forEach(function (lvl, i) {
      var b = el('button', 'ix-level');
      b.type = 'button';
      b.appendChild(el('span', 'ix-level-num', String(i + 1)));
      var body = el('span', 'ix-level-body');
      body.appendChild(el('span', 'ix-level-title', lvl.title));
      body.appendChild(el('span', 'ix-level-desc', lvl.desc));
      body.style.display = 'block';
      b.appendChild(body);
      if (saved && saved.value === i) b.classList.add('selected');
      b.addEventListener('click', function () {
        savePoll(id, i);
        btns.forEach(function (ob, k) { ob.classList.toggle('selected', k === i); });
      });
      btns.push(b);
      scale.appendChild(b);
    });
    card.appendChild(scale);
    card.appendChild(el('p', 'ix-poll-note', 'Your answer is saved on this device only — your facilitator tallies the room live.'));
    mount.appendChild(card);
  }

  // ── Personal readout (local progress only; no cohort aggregation) ───────────
  function renderReadout(mount) {
    mount.innerHTML = '';
    var s = getStore();
    var quiz = s.quiz || {};
    var card = el('div', 'ix-card');
    card.appendChild(el('div', 'ix-kicker', 'Your progress'));
    card.appendChild(el('div', 'ix-card-title', 'Personal workshop readout'));
    card.appendChild(el('p', 'ix-card-sub', 'A snapshot of your own progress on this device.'));

    var grid = el('div', 'ix-readout-grid');
    ['m1', 'm2', 'm3', 'm4'].forEach(function (m, i) {
      var passed = quiz[m] && quiz[m].passed;
      var pill = el('span', 'ix-pill' + (passed ? ' on' : ''));
      pill.appendChild(el('span', null, (passed ? '✓ ' : '○ ') + 'Module ' + (i + 1)));
      grid.appendChild(pill);
    });
    card.appendChild(grid);

    card.appendChild(el('p', 'ix-note',
      'This readout reflects your local progress only. Cross-cohort aggregation (who engaged, duplicate use cases, the IT readout) needs a backend and is out of scope for this version.'));

    var actions = el('div', 'ix-actions');
    var reset = el('button', 'ix-btn ix-btn--ghost', 'Clear my data');
    reset.type = 'button';
    reset.addEventListener('click', function () { resetAll(); renderReadout(mount); document.querySelectorAll('[data-ix-quiz]').forEach(renderQuiz); document.querySelectorAll('[data-ix-poll]').forEach(renderPoll); });
    actions.appendChild(reset);
    card.appendChild(actions);
    mount.appendChild(card);
  }

  // ── Init ────────────────────────────────────────────────────────────────────
  function init() {
    injectStyles();
    document.querySelectorAll('[data-ix-quiz]').forEach(renderQuiz);
    document.querySelectorAll('[data-ix-poll]').forEach(renderPoll);
    document.querySelectorAll('[data-ix-readout]').forEach(renderReadout);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.CoworkIX = { reset: resetAll, store: getStore };
})();
