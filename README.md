<!--
SENTRIX™ README — extreme edition
Notes:
- Pure GitHub-flavored Markdown + shields + details blocks + ASCII + diff blocks.
- No illegal instructions; strictly authorized environments.
-->

<h1 align="center">SENTRIX™</h1>
<h3 align="center"><code>Cyber Security Lab • Writeups Forge • X‑Ops Playground</code></h3>

<p align="center">
  <img alt="SENTRIX" src="https://img.shields.io/badge/SENTRIX%E2%84%A2-SEC%20LAB-7C3AED?style=for-the-badge&labelColor=0B0F19" />
  <img alt="Status" src="https://img.shields.io/badge/status-active%20build-22C55E?style=for-the-badge&labelColor=0B0F19" />
  <img alt="ROE" src="https://img.shields.io/badge/ROE-legal%20only-F43F5E?style=for-the-badge&labelColor=0B0F19" />
  <img alt="Stack" src="https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS-38BDF8?style=for-the-badge&labelColor=0B0F19" />
</p>

<p align="center">
  <b>Security • Event • Network • Threat • Response • Intelligence • X‑Ops</b><br/>
  <sub>Training-grade lab. Evidence-first writeups. Reproducible notes. Defensive mindset.</sub>
</p>

---

## `0x00 / banner`
```text
███████╗███████╗███╗   ██╗████████╗██████╗ ██╗██╗  ██╗
██╔════╝██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██║╚██╗██╔╝
███████╗█████╗  ██╔██╗ ██║   ██║   ██████╔╝██║ ╚███╔╝ 
╚════██║██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██║ ██╔██╗ 
███████║███████╗██║ ╚████║   ██║   ██║  ██║██║██╔╝ ██╗
╚══════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
```

---

## `0x01 / whoami`
**SENTRIX™** je môj **cyber security lab/portfolio web**: z poznámok robím **playbooky**, z playbookov robím **writeups** a tie držím v režime:

- **reproducible** (kroky + vstupy + výstupy)
- **defensible** (evidence, screenshots/logs, timeline)
- **boring-secure** (žiadne risky skratky)

> **ROE / Ethics:** iba **autorizované** prostredia (homelab, CTF, training).  
> Žiadne návody na nelegálne použitie. Žiadne “targeting real systems”.

---

## `0x02 / threat model (project intent)`
```diff
+ Build: cyber-themed UI + sections (writeups/tools/roadmap/community/login UI)
+ Goal: evolve into PHP 8 + MySQL app (OOP, CRUD, sessions)
+ Focus: blue+red craft, but always in legal lab scope
- Not: a malware repo
- Not: an intrusion handbook for real targets
```

---

## `0x03 / stack`
```diff
+ HTML5        :: structure
+ CSS3         :: dark/neon aesthetic
+ JavaScript   :: UI interactions & demos
- PHP 8 + MySQL:: planned rewrite (secure-by-default)
```

### Planned PHP rewrite — “boring secure” baseline
- `PDO` prepared statements (**no string-built SQL**)
- session auth with secure cookie hygiene
- CRUD `Articles/Writeups` + tags/categories
- output escaping by default + CSRF
- separation: `db/` `repositories/` `controllers/` (explicit flows)

---

## `0x04 / repo topology`
> Minimal surface, maximum clarity.

| Area | Path | What it is |
|---|---|---|
| Home | `index.html` | entrypoint, focus, quick links |
| Writeups | `writeups.html` | lab notes / articles (future DB) |
| Roadmap | `roadmap.html` | milestones & scope |
| Tools | `tools.html` | toolchain + techniques |
| Community | `community.html` | demo components (chat/comments + mini game) |
| Login UI | `login.html` | UI now, sessions later |
| Start | `start_web.html` | quick entry |
| Assets | `css/` `js/` `img/` | styling/scripts/media |

---

## `0x05 / quickstart`
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

### D) XAMPP (recommended for upcoming PHP + MySQL)
```text
Windows: C:\xampp\htdocs\sentrix\
Linux:   /opt/lampp/htdocs/sentrix/
macOS:   /Applications/XAMPP/htdocs/sentrix/
```
- Browse: `http://localhost/sentrix/`
- phpMyAdmin: `http://localhost/phpmyadmin`

---

## `0x06 / operator workflow`
> “Signal over noise. Evidence over vibes.”

1. **Observe** (what is normal?)
2. **Probe** (what changes under controlled input?)
3. **Record** (evidence, logs, timestamps)
4. **Explain** (root cause + impact)
5. **Mitigate** (fix + harden)
6. **Replay** (can I reproduce it?)

---

## `0x07 / writeup standard (template mindset)`
<details>
<summary><b>Click: Writeup skeleton (what I aim for)</b></summary>

```markdown
# Title — short, specific
## Scope / ROE
## Environment (versions, topology)
## Hypothesis / Goal
## Steps (reproducible)
## Evidence (logs/screenshots)
## Findings (what matters)
## Fix / Mitigation
## Lessons learned / Detection ideas
```
</details>

---

## `0x08 / roadmap (next phases)`
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

## `0x09 / security stance`
- **No secrets** committed (keys/tokens/passwords)
- **Explicit trust boundaries** (what is user-controlled vs internal)
- **Least privilege** mindset (future DB users/roles)
- **Audit-friendly** changes (clean commits, clear diffs)

---

## `0x0A / contributing`
Chceš pridať:
- lab scenár,
- nápad na sekciu Tools,
- alebo vylepšiť UI?

Otvor issue / pošli návrh.  
SENTRIX™ je “lab-first”, takže oceňujem **konkrétne** feedbacky (čo, kde, prečo).

---

## `0x0B / license`
Ak nie je uvedené inak: **All rights reserved** (default GitHub).  
Ak chceš open-source: pridaj `MIT` alebo `Apache-2.0`.

---

<p align="center">
  <sub>© 2026 SENTRIX™ • built by <b>DarkTender</b> • <code>stay legal</code></sub>
</p>
