# SENTRIX™ — Cyber Security Lab, Writeups & X‑Ops Playground

<p align="center">
  <b>Security • Event • Network • Threat • Response • Intelligence • X‑Ops</b><br/>
  <sub>Built for legal / authorized environments only (homelab, CTF, training).</sub>
</p>

---

## `whoami`
**SENTRIX™** je futuristický **cyber security lab/portfolio web**, kde skladám:
- **writeups & lab notes** (web / network / monitoring / detections)
- prehľad mojich **tools & techniques**
- **roadmap** transformácie z front-end prototypu na **čisté PHP 8 + MySQL** (OOP, CRUD, sessions)

> ⚠️ **Ethics / legality:** všetko je určené výhradne pre **legálne a autorizované testovanie**.  
> Žiadne “real-world” návody na zneužívanie systémov bez súhlasu.

---

## Stack / Tech
```diff
+ HTML5
+ CSS3 (dark / neon vibe)
+ JavaScript (interactions / UI demo)
- PHP 8 + MySQL (planned: rewrite)
```

---

## Site Map (čo tam nájdeš)
| Sekcia | Súbor | Čo je vo vnútri |
|---|---|---|
| **Home** | `index.html` | úvod, zamerania, rýchle odkazy |
| **Writeups** | `writeups.html` | články / lab notes (neskôr DB + CRUD) |
| **Roadmap** | `roadmap.html` | plán vývoja + milestone logika |
| **Tools** | `tools.html` | toolchain, postupy, poznámky |
| **Community** | `community.html` | demo prvkov (chat/komentáre + mini hra) |
| **Login (UI)** | `login.html` | zatiaľ len front-end; neskôr sessions + DB |
| **Start page** | `start_web.html` | rýchly štart / rozcestník |
| **Assets** | `css/`, `js/`, `img/` | štýly, skripty, obrázky |

---

## Quickstart (Run Locally)

### 1) Static (najjednoduchšie)
Otvor `index.html` priamo v prehliadači.

### 2) VS Code Live Server
1. Nainštaluj **Live Server**
2. Pravým na `index.html` → **Open with Live Server**

### 3) Python mini server
```bash
python -m http.server 8080
```

Potom:
- http://localhost:8080/

### 4) XAMPP (odporúčané pre budúce PHP + MySQL)
Keď začne prechod na PHP:
1. Nainštaluj **XAMPP**
2. Zapni **Apache** (+ voliteľne **MySQL**)
3. Umiestni projekt do:
   - Windows: `C:\xampp\htdocs\sentrix\`
   - Linux: `/opt/lampp/htdocs/sentrix/`
   - macOS: `/Applications/XAMPP/htdocs/sentrix/`
4. Otvor:
   - `http://localhost/sentrix/`
5. phpMyAdmin:
   - `http://localhost/phpmyadmin`

---

## Roadmap (PHP rewrite — high level)
Cieľ: preklopiť SENTRIX™ na aplikáciu v **čistom PHP 8 + MySQL**, bez framework “magic”.

Plánované komponenty:
- **OOP štruktúra** (DB layer, repositories, controllers)
- **CRUD** nad entitou `Articles/Writeups`
- **Login/Logout** cez `$_SESSION`
- bezpečné vstupy: **PDO prepared statements**, escaping, **CSRF**
- (voliteľne) admin panel + role

---

## Security Notes (prakticky, nie teatrálne)
SENTRIX™ je lab/portfolio, ale už teraz držím mindset:
- minimalizovať “copy‑paste insecure patterns”
- preferovať **explicitné** rozhodnutia (čo logujem, čo validujem, čo escapujem)
- všetko smerovať k tomu, aby PHP verzia bola “boring secure”

---

## Contributing / Feedback
Ak chceš pridať nápad do roadmapy alebo nájdeš bug v UI:
- otvor issue / pošli návrh
- alebo dropni feedback (čo by si chcel vidieť vo writeups)

---

## License
Ak tu nie je explicitná licencia, platí: **All rights reserved** (default GitHub).  
Ak chceš repo otvoriť pre reuse, odporúčam doplniť napr. `MIT` alebo `Apache-2.0`.

---

<p align="center">
  <sub>© 2026 SENTRIX™</sub>
</p>
