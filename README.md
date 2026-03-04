<!--
SENTRIX™ README — UNDERGROUND / CYBER / OPERATOR-GRADE (GitHub-safe)
- No JS in GitHub README → animations are GIF/SVG/images only.
- Dark / underground palette only (no rainbows, no cute).
- Authorized environments only. No illegal guidance.
-->

<div align="center">

<!-- BIG UNDERGROUND BANNER (dark neon, no rainbow) -->
<img
  src="https://capsule-render.vercel.app/api?type=venom&color=0:05070F,35:0B1020,70:1A0B2E,100:05070F&height=320&section=header&text=SENTRIX%E2%84%A2&fontSize=86&fontColor=E5E7EB&stroke=7C3AED&strokeWidth=2&animation=twinkling&desc=UNDERGROUND%20CYBER%20LAB%20%E2%80%A2%20WRITEUPS%20FORGE%20%E2%80%A2%20X%E2%80%91OPS&descAlignY=72"
  alt="SENTRIX underground banner"
/>

<!-- Glitch typing line (purple/green only) -->
<br/>
<img
  src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=18&duration=1400&pause=450&color=7C3AED&center=true&vCenter=true&multiline=true&width=1100&height=140&lines=%5B+SENTRIX%E2%84%A2+%5D+underground+cyber+lab;notes+%E2%86%92+artifacts+%E2%86%92+writeups+%E2%86%92+playbooks;ROE%3A+authorized+only+%7C+homelab+%7C+CTF+%7C+training"
  alt="typing"
/>

<!-- DARK "DATA STREAM" divider (subtle) -->
<br/>
<img
  src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
  width="860"
  alt="data stream divider"
/>

</div>

---

<div align="center">

<img alt="status"  src="https://img.shields.io/badge/status-OPERATIONAL-22C55E?style=for-the-badge&labelColor=05070F" />
<img alt="roe"     src="https://img.shields.io/badge/ROE-AUTHORIZED%20ONLY-F43F5E?style=for-the-badge&labelColor=05070F" />
<img alt="stack"   src="https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS-111827?style=for-the-badge&labelColor=05070F" />
<img alt="future"  src="https://img.shields.io/badge/future-PHP8%20%2B%20MySQL-0B1020?style=for-the-badge&labelColor=05070F" />
<img alt="mode"    src="https://img.shields.io/badge/mode-UNDERGROUND-7C3AED?style=for-the-badge&labelColor=05070F" />

</div>

<p align="center">
  <b>Security • Event • Network • Threat • Response • Intelligence • X‑Ops</b><br/>
  <sub>Evidence-first • Reproducible labs • Operator clarity • Dark cyber aesthetics</sub>
</p>

---

## `0x00 / ROE` — rules of engagement
> **Training-grade only.**  
> Security work only in **legal & authorized** environments (**homelab / CTF / controlled training**).  
> **No real-target guidance. No harm. No unauthorized access.**

```text
ROE:
- Permission  > skill
- Evidence    > vibes
- Repeatable  > impressive
- Defense     > drama
```

---

## `0x01 / cold open`
```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  SENTRIX™ is a lab.                                                        │
│  Underground aesthetic — professional discipline.                           │
│                                                                             │
│  notes  →  artifacts  →  writeups  →  playbooks                              │
│                                                                             │
│  If it’s not repeatable, it’s not real.                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## `0x02 / definition`
**SENTRIX™** je môj **cyber security lab/portfolio web**.

**Built to host:**
- **Writeups & lab notes** (web / network / monitoring / detections / IR)
- **Tools & techniques** (workflow, checklisty, snippets, mindset)
- **Roadmap** pre prechod na **PHP 8 + MySQL** (OOP, CRUD, sessions)

---

## `0x03 / repo surface map`
| Zone | Path | Purpose |
|---|---|---|
| **Entry** | `index.html` | intro, zamerania, quick links |
| **Writeups** | `writeups.html` | lab notes / articles (neskôr DB + CRUD) |
| **Roadmap** | `roadmap.html` | milestones & scope |
| **Tools** | `tools.html` | toolchain, techniques |
| **Community** | `community.html` | demo (chat/komentáre + mini hra) |
| **Login UI** | `login.html` | UI dnes, sessions neskôr |
| **Start** | `start_web.html` | rozcestník |
| **Assets** | `css/`, `js/`, `img/` | styling/scripts/media |

---

## `0x04 / intent model`
```diff
+ IS: cyber-themed portfolio lab (writeups/tools/roadmap/community/login UI)
+ IS: evolving into PHP8+MySQL app with secure-by-default baseline
+ IS: evidence-first documentation engine
- IS NOT: malware repo
- IS NOT: real-world intrusion handbook
- IS NOT: illegal guidance
```

---

## `0x05 / tech stack`
### `today`
```diff
+ HTML5
+ CSS3   :: dark / neon aesthetic
+ JS     :: UI interactions + demo components
```

### `tomorrow` (planned: PHP rewrite = “boring secure”)
```diff
- PHP 8 + MySQL
+ PDO prepared statements (no raw SQL)
+ sessions auth + cookie hygiene
+ CRUD Articles/Writeups + tags/categories
+ escaping-by-default + CSRF
+ explicit architecture: db/ repositories/ controllers/
```

---

## `0x06 / quickstart`
### A) Static
Open `index.html`.

### B) VS Code Live Server
1. Install **Live Server**
2. Right click `index.html` → **Open with Live Server**

### C) Python microserver
```bash
python -m http.server 8080
```
Open: http://localhost:8080/

### D) XAMPP (for PHP phase)
```text
Windows: C:\xampp\htdocs\sentrix\
Linux:   /opt/lampp/htdocs/sentrix/
macOS:   /Applications/XAMPP/htdocs/sentrix/
```
- Browse: `http://localhost/sentrix/`
- phpMyAdmin: `http://localhost/phpmyadmin`

---

## `0x07 / operator doctrine`
> “Skill is measured by clarity under pressure.”

### Principles
- **Reproducible** → replay from zero
- **Defensible** → evidence + timestamps + scope
- **Boring-secure** → explicit validation, escaping, boundaries

### Loop
1. Observe baseline  
2. Probe controlled input  
3. Record evidence  
4. Explain impact + root cause  
5. Mitigate + harden  
6. Replay (prove it)

---

## `0x08 / writeup forge`
<details>
<summary><b>Writeup skeleton (operator-grade)</b></summary>

```markdown
# Title (specific, measurable)
## Scope / ROE
## Environment (versions, topology)
## Goal / Hypothesis
## Procedure (repro steps)
## Evidence (logs/screenshots/timestamps)
## Findings (impact + root cause)
## Mitigation (fix + hardening)
## Detection ideas (signals/rules/logging)
## Lessons learned
```
</details>

<details>
<summary><b>Evidence checklist</b></summary>

```text
[ ] Timestamps present
[ ] Exact inputs captured
[ ] Exact outputs/logs captured
[ ] Scope authorized + stated
[ ] Reproducible by third party
```
</details>

---

## `0x09 / roadmap`
```text
[PHASE 1] Content → data model
  - Articles/Writeups entity
  - tags/categories
  - search + pagination

[PHASE 2] Auth + admin
  - session login/logout
  - role separation
  - CSRF + secure cookies + basic rate limiting

[PHASE 3] Hardening + hygiene
  - input validation layer
  - consistent output escaping
  - audit trail for admin actions
  - predictable errors (no info leaks)
```

---

## `0x0A / security stance`
- **No secrets** in repo
- **Explicit trust boundaries**
- **Least privilege**
- **Audit-friendly** diffs
- **No harm / no illegal guidance**

---

<div align="center">

<!-- Dark footer motion -->
<img
  src="https://capsule-render.vercel.app/api?type=waving&color=0:05070F,40:0B1020,70:1A0B2E,100:05070F&height=170&section=footer&animation=twinkling"
  alt="footer"
/>

<sub>© 2026 SENTRIX™ • built by <b>DarkTender</b> • <code>stay legal</code></sub>

</div>
