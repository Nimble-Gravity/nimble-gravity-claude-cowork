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
  function saveProfile(name)    { var s = getStore(); s.profile = { name: name, ts: Date.now() }; setStore(s); }
  function getProfile()         { var s = getStore(); return s.profile || null; }
  function resetAll()           { try { window.localStorage.removeItem(LS_KEY); } catch (e) {} }

  var MODULE_LABELS = { m1: 'Module 1 · Setup & Foundations', m2: 'Module 2 · Use Cowork', m3: 'Module 3 · Build a Skill', m4: 'Module 4 · Plugins & Rollout' };
  function passedCount() { var s = getStore(); var q = s.quiz || {}; var n = 0; ['m1','m2','m3','m4'].forEach(function (m) { if (q[m] && q[m].passed) n++; }); return n; }

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
        { q: 'On your first delegated task, which permission mode is recommended?',
          options: ['Act without asking', 'Ask before acting — approve each step', 'No mode is needed'],
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
        { q: 'For a regulated bank, how do you handle the June 2026 audit-coverage gap?',
          options: ['Ignore it', 'Manage it — least privilege, approvals on, monitor via the Analytics API, and re-verify each cycle', 'Stop using Cowork entirely'],
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
      '.ix-note{margin-top:16px;font-size:13px;color:var(--slate);line-height:1.6;}',
      // profile
      '.ix-field{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:18px;}',
      '.ix-input{flex:1 1 240px;min-width:0;padding:11px 14px;border:1px solid var(--border);border-radius:10px;font-size:15px;font-family:inherit;color:var(--navy);background:var(--off);}',
      '.ix-input:focus{outline:none;border-color:var(--teal);}',
      '.ix-saved{margin-top:12px;font-size:14px;color:var(--teal);font-weight:600;}',
      // progress
      '.ix-prog{display:flex;flex-direction:column;gap:10px;margin-top:18px;}',
      '.ix-prog-row{display:flex;align-items:center;gap:14px;padding:12px 16px;border:1px solid var(--border);border-radius:12px;background:var(--off);}',
      '.ix-prog-row.on{border-color:rgba(64,140,132,.4);background:rgba(64,140,132,.1);}',
      '.ix-prog-check{flex:0 0 auto;width:28px;height:28px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#fff;background:#c3c2cf;}',
      '.ix-prog-row.on .ix-prog-check{background:var(--mint-on-dark);}',
      '.ix-prog-label{flex:1 1 auto;min-width:0;font-size:15px;font-weight:600;color:var(--navy);}',
      '.ix-prog-score{font-size:13px;color:var(--slate);font-family:\'Roboto Mono\',monospace;}',
      '.ix-bar{height:10px;border-radius:999px;background:var(--border);overflow:hidden;margin-top:18px;}',
      '.ix-bar-fill{height:100%;background:var(--mint-on-dark);transition:width .4s ease;}',
      '.ix-prog-summary{margin-top:12px;font-size:15px;color:var(--navy);font-weight:600;}',
      // certificate
      '.ix-cert{margin-top:18px;border:2px solid var(--teal);border-radius:16px;padding:40px 36px;text-align:center;background:linear-gradient(180deg,#fff, #f7faf9);}',
      '.ix-cert-eyebrow{font-family:\'Roboto Mono\',monospace;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);}',
      '.ix-cert-title{font-size:26px;font-weight:700;color:var(--navy);margin:10px 0 6px;}',
      '.ix-cert-line{font-size:15px;color:var(--slate);}',
      '.ix-cert-name{font-size:30px;font-weight:700;color:var(--navy);margin:14px 0;border-bottom:2px solid var(--border);display:inline-block;padding:0 24px 8px;}',
      '.ix-cert-meta{font-size:13px;color:var(--slatel);margin-top:14px;}',
      '.ix-cert-disclaimer{margin-top:18px;font-size:12px;color:var(--slatel);font-style:italic;}',
      '.ix-locked{margin-top:18px;border:1px dashed var(--border);border-radius:14px;padding:30px 28px;text-align:center;background:var(--off);}',
      '.ix-locked-icon{font-size:28px;}',
      '.ix-locked-title{font-size:18px;font-weight:600;color:var(--navy);margin-top:8px;}',
      '.ix-locked-sub{font-size:14px;color:var(--slate);margin-top:6px;}',
      // print: when printing the certificate, show only the print layer
      '.ix-print-layer{display:none;}',
      '@media print{body.ix-printing > *:not(.ix-print-layer){display:none !important;} .ix-print-layer{display:block !important;padding:0;} .ix-print-layer .ix-cert{margin:0;border-width:3px;}}'
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

  // ── Profile (a name, stored locally) ────────────────────────────────────────
  function renderProfile(mount) {
    mount.innerHTML = '';
    var prof = getProfile();
    var card = el('div', 'ix-card');
    card.appendChild(el('div', 'ix-kicker', 'Your profile'));
    card.appendChild(el('div', 'ix-card-title', 'Who you are'));
    card.appendChild(el('p', 'ix-card-sub', 'Add your name so your progress and certificate are personalized. Stored on this device only.'));
    var field = el('div', 'ix-field');
    var input = el('input', 'ix-input');
    input.type = 'text';
    input.placeholder = 'Your full name';
    if (prof && prof.name) input.value = prof.name;
    var save = el('button', 'ix-btn', 'Save');
    save.type = 'button';
    field.appendChild(input);
    field.appendChild(save);
    card.appendChild(field);
    var saved = el('p', 'ix-saved');
    saved.style.display = 'none';
    card.appendChild(saved);
    function doSave() {
      var name = input.value.trim();
      if (!name) return;
      saveProfile(name);
      saved.textContent = 'Saved — hi, ' + name + '.';
      saved.style.display = 'block';
      refreshProgressViews();
    }
    save.addEventListener('click', doSave);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') doSave(); });
    mount.appendChild(card);
  }

  // ── Progress dashboard ──────────────────────────────────────────────────────
  function renderProgress(mount) {
    mount.innerHTML = '';
    var s = getStore();
    var quiz = s.quiz || {};
    var prof = getProfile();
    var card = el('div', 'ix-card');
    card.appendChild(el('div', 'ix-kicker', 'Your progress'));
    card.appendChild(el('div', 'ix-card-title', (prof && prof.name) ? (prof.name + "'s progress") : 'Your progress'));
    card.appendChild(el('p', 'ix-card-sub', 'Module quizzes you have passed, on this device.'));
    var rows = el('div', 'ix-prog');
    ['m1', 'm2', 'm3', 'm4'].forEach(function (m) {
      var q = quiz[m];
      var passed = q && q.passed;
      var row = el('div', 'ix-prog-row' + (passed ? ' on' : ''));
      row.appendChild(el('span', 'ix-prog-check', passed ? '✓' : '○'));
      row.appendChild(el('span', 'ix-prog-label', MODULE_LABELS[m]));
      row.appendChild(el('span', 'ix-prog-score', q ? (q.score + '/' + q.total) : '—'));
      rows.appendChild(row);
    });
    card.appendChild(rows);
    var n = passedCount();
    var bar = el('div', 'ix-bar');
    var fill = el('div', 'ix-bar-fill');
    fill.style.width = (n / 4 * 100) + '%';
    bar.appendChild(fill);
    card.appendChild(bar);
    card.appendChild(el('p', 'ix-prog-summary', n + ' of 4 modules complete' + (n === 4 ? ' — certificate unlocked below.' : '.')));
    var actions = el('div', 'ix-actions');
    var reset = el('button', 'ix-btn ix-btn--ghost', 'Clear my data');
    reset.type = 'button';
    reset.addEventListener('click', function () { resetAll(); refreshProgressViews(); document.querySelectorAll('[data-ix-profile]').forEach(renderProfile); });
    actions.appendChild(reset);
    card.appendChild(actions);
    mount.appendChild(card);
  }

  // ── Certificate (client-only; gated on all four module quizzes passed) ──────
  function buildCertNode() {
    var prof = getProfile();
    var name = (prof && prof.name) ? prof.name : '';
    var cert = el('div', 'ix-cert');
    cert.appendChild(el('div', 'ix-cert-eyebrow', 'Nimble Gravity × Axos Bank · Cowork Enablement'));
    cert.appendChild(el('div', 'ix-cert-title', 'Certificate of Completion'));
    cert.appendChild(el('div', 'ix-cert-line', 'This certifies that'));
    cert.appendChild(el('div', 'ix-cert-name', name || 'Your name'));
    cert.appendChild(el('div', 'ix-cert-line', 'completed the four-module Cowork Enablement Program.'));
    var d = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    cert.appendChild(el('div', 'ix-cert-meta', months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()));
    cert.appendChild(el('div', 'ix-cert-disclaimer', 'A personal record of completion — not an official Axos training record.'));
    return cert;
  }

  function renderCertificate(mount) {
    mount.innerHTML = '';
    var n = passedCount();
    if (n < 4) {
      var locked = el('div', 'ix-locked');
      locked.appendChild(el('div', 'ix-locked-icon', '🔒'));
      locked.appendChild(el('div', 'ix-locked-title', 'Certificate locked'));
      locked.appendChild(el('div', 'ix-locked-sub', 'Pass all four module quizzes to unlock your certificate — ' + n + ' of 4 done. The quizzes are at the end of each module lab.'));
      mount.appendChild(locked);
      return;
    }
    var prof = getProfile();
    var card = el('div', 'ix-card');
    card.appendChild(el('div', 'ix-kicker', 'You did it'));
    card.appendChild(el('div', 'ix-card-title', 'Your certificate'));
    if (!prof || !prof.name) {
      card.appendChild(el('p', 'ix-card-sub', 'Add your name in the profile above to personalize it.'));
    }
    card.appendChild(buildCertNode());
    var actions = el('div', 'ix-actions');
    var printBtn = el('button', 'ix-btn', 'Print / Save as PDF');
    printBtn.type = 'button';
    printBtn.addEventListener('click', function () {
      var layer = el('div', 'ix-print-layer');
      layer.appendChild(buildCertNode());
      document.body.appendChild(layer);
      document.body.classList.add('ix-printing');
      function cleanup() { document.body.classList.remove('ix-printing'); if (layer.parentNode) layer.parentNode.removeChild(layer); window.removeEventListener('afterprint', cleanup); }
      window.addEventListener('afterprint', cleanup);
      window.print();
      setTimeout(cleanup, 1500);
    });
    actions.appendChild(printBtn);
    card.appendChild(actions);
    mount.appendChild(card);
  }

  function refreshProgressViews() {
    document.querySelectorAll('[data-ix-progress]').forEach(renderProgress);
    document.querySelectorAll('[data-ix-certificate]').forEach(renderCertificate);
    document.querySelectorAll('[data-ix-readout]').forEach(renderReadout);
  }

  // ── Init ────────────────────────────────────────────────────────────────────
  function init() {
    injectStyles();
    document.querySelectorAll('[data-ix-quiz]').forEach(renderQuiz);
    document.querySelectorAll('[data-ix-poll]').forEach(renderPoll);
    document.querySelectorAll('[data-ix-readout]').forEach(renderReadout);
    document.querySelectorAll('[data-ix-profile]').forEach(renderProfile);
    document.querySelectorAll('[data-ix-progress]').forEach(renderProgress);
    document.querySelectorAll('[data-ix-certificate]').forEach(renderCertificate);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.CoworkIX = { reset: resetAll, store: getStore };
})();
