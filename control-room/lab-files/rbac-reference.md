# Claude Enterprise RBAC — Reference Standard

Axos Identity & Access · the rules a Cowork role design is tested against.
*Reflects Anthropic's Enterprise role-based permissions model, verified 2026-07-21.*

---

## RB-1 · Owner is not an admin convenience

Static roles are **User**, **Admin**, and **Owner**, plus a single **Primary Owner** per organization.
Owners and Primary Owners always have full access to every feature — there is no way to narrow an Owner.

**Rule:** Owner is reserved for people who genuinely need full access across the whole organization.
Anyone whose need is limited to a single admin area must instead hold a **Custom** role granting only
that area. Delegating billing or identity work by handing out Owner is a finding.

## RB-2 · The six admin permission areas

Custom roles delegate administration through six areas, each set to **No access**, **Can view**, or
**Can manage**:

| Area | Covers |
|---|---|
| Identity & Access | Editing roles and groups |
| Billing | Payment, invoices, plan |
| Analytics | Usage reporting and dashboards |
| Privacy | Privacy settings |
| User Management | Inviting and removing members |
| Libraries | Shared library content |

## RB-3 · Custom roles inherit nothing

Anthropic's wording is exact and it is the most common misconfiguration:

> "Members assigned to custom roles don't automatically inherit organization-enabled capabilities.
> Every capability a 'Custom' role member needs must be explicitly granted."

**Rule:** a Custom role that lists no capabilities grants no capabilities — even if Cowork is enabled
org-wide. Every capability the group needs (Cowork, Claude Code, Web Search, Memory, Projects, Code
Execution) must appear explicitly on the role.

Related: **the organization-level toggle must be on for custom roles to control per-member access.**
The org toggle is the ceiling; the role is the grant.

## RB-4 · Groups sync from the IdP — but not nested ones

Groups are created manually or synced via SCIM, and are managed at the parent organization.

**Rule:** **nested IdP groups are not supported — only direct members synchronize.** A group whose
membership comes from a parent group in the identity provider will sync as empty.

## RB-5 · Connectors are approve-by-default, not allow-by-default

Each connector is set to **Always allow**, **Needs approval**, or **Blocked**, with per-tool
granularity via **Custom**.

**Rule:** any connector that can reach customer or loan data must be **Needs approval**, not
Always allow. Note that connector settings are **organization-wide — there is no per-group connector
control**, so the strictest requirement governs the whole org.

## RB-6 · Cap the model, don't just report on it

The **Models** tab enables or disables specific models, **caps effort levels**, and sets the default
model for new conversations.

**Rule:** Opus overuse is corrected with a model cap on the Models tab, not with a dashboard note.
A finding that says "monitor Opus spend" without a corresponding cap is not remediated.

## RB-7 · Permission math: capabilities union, spend limits intersect

- **Capabilities are additive** — a user in multiple groups gets the **union** of permissions.
- **Group spend limits are the opposite** — **the most restrictive limit across a user's groups wins.**

**Rule:** never assume a second group loosens a spend cap. It cannot.

> **Field caveat (confirm for your tenant):** Enterprise removes several of the cost controls
> available on Team, and there is no clean per-user spend cap. Organizations that need genuine
> per-user limits are enforcing them through an API management gateway rather than in-product.
> Treat the group-limit rule as directional, and verify what your own plan actually exposes.

## RB-8 · SSO before RBAC

SSO controls who can log in; RBAC controls which product surfaces they reach.

**Rule:** configure and verify SSO and role assignment **before** enforcing RBAC. Enforcing roles
against an unsettled identity source risks locking out administrators.

## RB-9 · Plugin distribution preferences

Private-marketplace plugins are distributed with one of four install preferences, and Enterprise
supports **group-level overrides tied to SCIM groups**:

| Preference | Meaning |
|---|---|
| **Required** | Automatically installed for all members, **without the option to remove it** |
| Installed by default | Automatically installed, but members can uninstall |
| Available for install | Listed in the catalog; members self-install |
| Not available | Hidden from the catalog entirely |

**Rule:** a plugin carrying a mandatory control — a disclaimer, a review gate, a retention notice —
must be set so members cannot remove it. Merely offering it is not a control.

Per-group overrides are set from the **Custom access** column → **Add groups**. Where a member is in
several groups, **the most permissive setting wins**, in the order above — so "Not available" for one
group does not block someone who is also in a more permissive group.

Org-managed plugins cannot be edited by members: **the owner pushes, members copy.**
