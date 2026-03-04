<!--
SENTRIX™ README — DIVINE / OPERATOR-GRADE edition
- GitHub-safe: GFM + HTML + shields + details
- No illegal guidance. Authorized environments only.
-->

<h1 align="center">SENTRIX™</h1>
<h3 align="center"><code>Cyber Security Lab • Writeups Forge • X‑Ops Playground</code></h3>

<p align="center">
  <img alt="SENTRIX" src="https://img.shields.io/badge/SENTRIX%E2%84%A2-NEON%20SEC%20LAB-7C3AED?style=for-the-badge&labelColor=05070F" />
  <img alt="Status"  src="https://img.shields.io/badge/status-OPERATIONAL-22C55E?style=for-the-badge&labelColor=05070F" />
  <img alt="ROE"     src="https://img.shields.io/badge/ROE-AUTHORIZED%20ONLY-F43F5E?style=for-the-badge&labelColor=05070F" />
  <img alt="Build"   src="https://img.shields.io/badge/build-static%20web-38BDF8?style=for-the-badge&labelColor=05070F" />
  <img alt="Future"  src="https://img.shields.io/badge/future-PHP8%20%2B%20MySQL-F59E0B?style=for-the-badge&labelColor=05070F" />
</p>

<p align="center">
  <b>Security • Event • Network • Threat • Response • Intelligence • X‑Ops</b><br/>
  <sub>Evidence-first. Reproducible labs. Defensive mindset. Cyber aesthetics with engineering discipline.</sub>
</p>

<hr/>

## `0x00 / oath (ROE)`
> **This project is training-grade.**  
> I do security only in **legal & authorized** environments: homelab, CTF, controlled training ranges.  
> No real-target guidance. No harm. No unauthorized access.

```text
ROE:
- Permission > skill
- Evidence > vibes
- Repeatability > storytelling
- Defense is a feature, not an afterthought
```

---

## `0x01 / cold open`
```text
┌───────────────────────────────────────────────────────────────────────────┐
│ SENTRIX™ is a lab where notes become artifacts.                            │
│ Artifacts become writeups.                                                 │
│ Writeups become playbooks.                                                 │
│ Playbooks become discipline.                                               │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## `0x02 / what is SENTRIX™`
**SENTRIX™** je môj **cyber security lab/portfolio web** určený na:
- **Writeups & lab notes** (web / network / monitoring / detections / IR)
- **Tools & techniques** (workflow, checklisty, snippets, mindset)
- **Roadmap** (migrácia na **PHP 8 + MySQL**: OOP, CRUD, sessions)

---

## `0x03 / repo topology (surface map)`
| Zone | Path | Purpose |
|---|---|---|
| **Entry** | `index.html` | intro, zamerania, quick links |
| **Writeups** | `writeups.html` | články / lab notes (neskôr DB + CRUD) |
| **Roadmap** | `roadmap.html` | plán vývoja + milestones |
| **Tools** | `tools.html` | toolchain + postupy |
| **Community** | `community.html` | demo (chat/komentáre + mini hra) |
| **Login UI** | `login.html` | UI dnes, sessions neskôr |
| **Start** | `start_web.html` | rozcestník |
| **Assets** | `css/`, `js/`, `img/` | styling / scripts / media |

---

## `0x04 / intent (threat model of the project itself)`
```diff
+ Build: cyber-themed UI with sections (Writeups/Tools/Roadmap/Community/Login UI)
+ Goal : evolve into clean PHP 8 + MySQL app (OOP, CRUD, sessions)
+ Focus: blue+red craft, always within authorized lab scope
- Not  : malware repository
- Not  : real-world intrusion instructions
```

---

## `0x05 / stack (today → tomorrow)`
### Today (static)
```diff
+ HTML5        :: structure
+ CSS3         :: dark / neon / cyber aesthetic
+ JavaScript   :: UI interactions & demo components
```

### Tomorrow (planned PHP rewrite: “boring secure” baseline)
```diff
- PHP 8 + MySQL :: planned rewrite
+ PDO prepared statements (no raw SQL)
+ session auth + secure cookie hygiene
+ CRUD Articles/Writeups + tags/categories
+ output escaping + CSRF
+ explicit architecture (db/repo/controllers)
```

---

## `0x06 / quickstart (run locally)`
### A) Static (zero friction)
Open `index.html`.

### B) VS Code Live Server
1. Install **Live Server**
2. Right click `index.html` → **Open with Live Server**

### C) Python microserver
```bash
python -m http.server 8080
```
Open: http://localhost:8080/

### D) XAMPP (recommended for PHP + MySQL phase)
```text
Windows: C:\xampp\htdocs\sentrix\
Linux:   /opt/lampp/htdocs/sentrix/
macOS:   /Applications/XAMPP/htdocs/sentrix/
```
- Browse: `http://localhost/sentrix/`
- phpMyAdmin: `http://localhost/phpmyadmin`

---

## `0x07 / operator doctrine (elite, not illegal)`
> “Skill is measured by clarity, not chaos.”

### Principles
- **Reproducible:** steps + inputs + outputs (replay from zero)
- **Defensible:** evidence + timestamps + scope (audit-friendly)
- **Boring-secure:** explicit validation, explicit escaping, explicit trust boundaries

### Loop
1. **Observe** baseline  
2. **Probe** with controlled input  
3. **Record** evidence (logs/screenshots/timeline)  
4. **Explain** impact + root cause  
5. **Mitigate** (fix + harden)  
6. **Replay** (prove it’s repeatable)

---

## `0x08 / writeups (notes → artifacts → playbooks)`
<details>
<summary><b>Writeup skeleton (operator-grade)</b></summary>

```markdown
# Title (specific, measurable)
## Scope / ROE (authorized only)
## Environment (versions, topology, assumptions)
## Goal / Hypothesis
## Procedure (reproducible steps)
## Evidence (logs, screenshots, timestamps)
## Findings (impact + root cause)
## Mitigation (fix + hardening)
## Detection ideas (signals, rules, logging)
## Lessons learned (what I’d do differently)
```
</details>

<details>
<summary><b>Evidence-first checklist</b></summary>

```text
[ ] Do I have timestamps?
[ ] Do I have exact inputs that triggered behavior?
[ ] Do I have exact outputs/logs proving it?
[ ] Is scope explicitly authorized?
[ ] Can someone else reproduce from scratch?
```
</details>

---

## `0x09 / roadmap (extreme but realistic)`
```text
[PHASE 1] Content → data model
  - Articles/Writeups entity
  - tags/categories
  - search + pagination

[PHASE 2] Auth + admin
  - session login/logout
  - role separation
  - CSRF + secure cookies + basic rate limiting

[PHASE 3] Hardening + operational hygiene
  - input validation layer
  - consistent output escaping
  - audit trail for admin actions
  - predictable error handling (no info leaks)
```

---

## `0x0A / security stance (non-negotiables)`
- **No secrets** in repo (keys/tokens/passwords)
- **Explicit trust boundaries** (user-controlled vs internal)
- **Least privilege** mindset (future DB roles)
- **Audit-friendly** changes (clean commits, clear diffs)
- **No harm / no illegal guidance** — ever

---

## `0x0B / contributing`
Máš nápad na lab scenár / writeup / tools sekciu / UI vylepšenie?
- otvor issue / pošli návrh
- najviac cením **konkrétne** feedbacky: *čo, kde, prečo, ako to overiť*

---

## `0x0C / license`
Ak nie je uvedené inak: **All rights reserved** (default GitHub).  
Ak chceš open-source: pridaj `MIT` alebo `Apache-2.0`.

---

<p align="center">
  <sub>© 2026 SENTRIX™ • built by <b>DarkTender</b> • <code>stay legal</code></sub>
</p>
