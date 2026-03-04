<!--
SENTRIX™ README — MOTION / NEON / OPERATOR-GRADE (GitHub-safe)
Rules:
- GitHub README cannot run JS. "Animation" = GIF/SVG/remote-rendered images only.
- Strictly authorized/ethical. No illegal guidance.
-->

<div align="center">

<!-- BIG HACKER BANNER (animated render) -->
<img
  src="https://capsule-render.vercel.app/api?type=venom&color=0:05070F,20:7C3AED,55:22C55E,85:F43F5E,100:05070F&height=300&section=header&text=SENTRIX%E2%84%A2&fontSize=82&fontColor=E5E7EB&stroke=7C3AED&strokeWidth=2&animation=twinkling&desc=NEON%20SEC%20LAB%20%E2%80%A2%20WRITEUPS%20FORGE%20%E2%80%A2%20X%E2%80%91OPS%20PLAYGROUND&descAlignY=72"
  alt="SENTRIX big hacker banner"
/>

</div>

<div align="center">

<!-- Animated typing line -->
<img
  src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=18&duration=1600&pause=450&color=7C3AED&center=true&vCenter=true&multiline=true&width=1100&height=150&lines=%5B+SENTRIX%E2%84%A2+%5D+NEON+SEC+LAB;notes+%E2%86%92+artifacts+%E2%86%92+writeups+%E2%86%92+playbooks;authorized+only+%7C+homelab+%7C+CTF+%7C+training"
  alt="typing"
/>

<!-- Animated “matrix-ish” divider (GIF) -->
<br/>
<img
  src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
  width="780"
  alt="matrix divider"
/>

</div>

---

<div align="center">

<img alt="status" src="https://img.shields.io/badge/status-OPERATIONAL-22C55E?style=for-the-badge&labelColor=05070F" />
<img alt="roe" src="https://img.shields.io/badge/ROE-AUTHORIZED%20ONLY-F43F5E?style=for-the-badge&labelColor=05070F" />
<img alt="stack" src="https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS-38BDF8?style=for-the-badge&labelColor=05070F" />
<img alt="future" src="https://img.shields.io/badge/future-PHP8%20%2B%20MySQL-F59E0B?style=for-the-badge&labelColor=05070F" />
<img alt="mindset" src="https://img.shields.io/badge/mindset-BORING%20SECURE-7C3AED?style=for-the-badge&labelColor=05070F" />

</div>

<p align="center">
  <b>Security • Event • Network • Threat • Response • Intelligence • X‑Ops</b><br/>
  <sub>Evidence-first • Reproducible labs • Defensive mindset • Cyber aesthetics with engineering discipline</sub>
</p>

---

## `0x00 / ROE` — rules of engagement (non-negotiable)
> **Training-grade only.**  
> Security work only in **legal & authorized** environments: **homelab / CTF / controlled training**.  
> **No real-target instructions. No harm. No unauthorized access.**

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
│  SENTRIX™ is a lab. Not a vibe board.                                        │
│  It turns curiosity into artifacts.                                          │
│  Artifacts into writeups.                                                    │
│  Writeups into playbooks.                                                    │
│  Playbooks into discipline.                                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## `0x02 / definition`
**SENTRIX™** je môj **cyber security lab/portfolio web**.  
Minimal UI chaos, maximum operator clarity.

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

## `0x04 / intent model` (what this repo is / isn't)
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
### `today` (static)
```diff
+ HTML5
+ CSS3   :: dark / neon aesthetic
+ JS     :: UI interactions + demo components
```

### `tomorrow` (planned: PHP rewrite = "boring secure")
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

### D) XAMPP (recommended for PHP phase)
```text
Windows: C:\xampp\htdocs\sentrix\
Linux:   /opt/lampp/htdocs/sentrix/
macOS:   /Applications/XAMPP/htdocs/sentrix/
```
- Browse: `http://localhost/sentrix/`
- phpMyAdmin: `http://localhost/phpmyadmin`

---

## `0x07 / operator doctrine`
> “Skill is clarity under pressure.”

### Principles
- **Reproducible** → replay from zero
- **Defensible** → evidence + timestamps + scope
- **Boring-secure** → explicit validation, escaping, boundaries

### Loop
1. Observe baseline  
2. Probe with controlled input  
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
- **No secrets** in repo (keys/tokens/passwords)
- **Explicit trust boundaries**
- **Least privilege** (future DB roles)
- **Audit-friendly** diffs
- **No harm / no illegal guidance**

---

<div align="center">

<!-- Another animated divider (GIF) -->
<img
  src="https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif"
  width="780"
  alt="neon divider"
/>

<br/>
<sub>© 2026 SENTRIX™ • built by <b>DarkTender</b> • <code>stay legal</code></sub>

<!-- Animated footer banner -->
<br/>
<img
  src="https://capsule-render.vercel.app/api?type=waving&color=0:05070F,30:7C3AED,60:22C55E,100:F43F5E&height=160&section=footer&animation=twinkling"
  alt="footer"
/>

</div>
