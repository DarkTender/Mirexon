# SENTRIX™ — Cyber Security Lab & Writeups

**S**ecurity  
**E**vent  
**N**etwork  
**T**hreat  
**R**esponse  
**I**ntelligence  
**X**‑Ops  
--- ™

SENTRIX™ je môj **cyber security lab web** zameraný na:
- **writeups & lab notes** (web security, networking, logy/detekcie),
- prehľad používaných **tools & techniques**,
- jednoduchú komunitnú sekciu (demo),
- a hlavne ako základ pre školský projekt v **čistom PHP**.

> Poznámka: všetko je určené na učenie a dokumentáciu v **legálnom, autorizovanom prostredí** (homelab/CTF).

---

## 🎯 Cieľ projektu (škola)

Tento projekt bude počas roka prerobený na web aplikáciu, ktorá spĺňa požiadavky:

- **PHP 8.0+**
- **MySQL 8.0+**
- **OOP (objektovo orientované programovanie)**
- **CRUD operácie** aspoň nad jednou entitou (napr. články/writeups)
- **Login / sessions** (admin prístup)
- **bez PHP frameworkov**
- **bez CMS**
- priebežné commitovanie do verejného repozitára

---

## 🧱 Plánované entity (DB)

Minimálne:
- **Articles / Writeups** (CRUD)  
  `id, title, slug, content, created_at, updated_at`

Voliteľne (na rozšírenie a unikátnosť):
- **Users** (login)  
  `id, email, username, password_hash, created_at`
- **Comments** (k článkom)  
  `id, article_id, author, content, created_at`
- **Tags** (kategórie)  
  `id, name` + väzobná tabuľka `article_tags`

---

## ✅ Roadmap (high-level)

### Fáza 1 — UI (hotové / priebežne)
- [x] Rebrand z “AI platformy” na **SENTRIX**
- [x] Jednotné menu + stránka **Roadmap**
- [x] Sekcie: Writeups / Roadmap / Tools / Komunita / Login

### Fáza 2 — PHP základ (pripraviť štruktúru)
- [ ] `public/index.php` (entry point)
- [ ] `config/config.php` (DB nastavenia)
- [ ] `app/Core/Database.php` (PDO)

### Fáza 3 — CRUD: Articles
- [ ] list článkov (READ)
- [ ] detail článku (READ)
- [ ] create článku (CREATE) — len po prihlásení
- [ ] edit článku (UPDATE) — len po prihlásení
- [ ] delete článku (DELETE) — len po prihlásení

### Fáza 4 — Login (bez frameworku)
- [ ] registrácia (voliteľne)
- [ ] login/logout (sessions)
- [ ] `password_hash()` / `password_verify()`
- [ ] ochrana admin akcií

### Fáza 5 — Bezpečnosť (na obhajobu)
- [ ] PDO prepared statements (SQLi prevencia)
- [ ] output escaping (XSS prevencia)
- [ ] CSRF tokeny vo formulároch
- [ ] validácie vstupov
- [ ] bezpečné session nastavenia

---

## 🧰 Sekcie webu (aktuálne)

- **Domov**: prehľad projektu SENTRIX  
- **Writeups**: lab notes + príprava na CRUD “Articles”  
- **Roadmap**: plán projektu (PHP + MySQL + OOP + CRUD + login)  
- **Tools**: nástroje a postupy (Nmap, Wireshark, Burp/ZAP, logy…)  
- **Komunita**: front-end demo (chat/komentáre + mini hra)

---

## 🛠️ Ako spustiť projekt

### Varianta A: Staticky (najjednoduchšie)
Stačí otvoriť `index.html` v prehliadači.

> Niektoré veci (napr. fetch, routing, neskôr PHP) môžu vyžadovať lokálny server.

---

### Varianta B: VS Code Live Server
1. Nainštaluj rozšírenie **Live Server**
2. Pravým na `index.html` → **Open with Live Server**

---

### Varianta C: Python server
```bash
python -m http.server 8080
```
Potom otvor:
- http://localhost:8080/

---

### Varianta D: XAMPP (Apache) — odporúčané pre budúce PHP
Táto varianta sa hodí hlavne preto, že neskôr budeš robiť **PHP + MySQL**.

1. Nainštaluj **XAMPP** (Windows/Linux/macOS).
2. Spusť **XAMPP Control Panel**.
3. Zapni:
   - **Apache**
   - (voliteľne už teraz) **MySQL**
4. Skopíruj alebo naklonuj projekt do XAMPP web rootu:
   - Windows typicky: `C:\xampp\htdocs\`
   - Linux typicky: `/opt/lampp/htdocs/`
   - macOS typicky: `/Applications/XAMPP/htdocs/`

   Odporúčané umiestnenie:
   - `C:\xampp\htdocs\sentrx\` (alebo `sentrix\`)

5. Otvor v prehliadači:
   - `http://localhost/sentrix/`
   - alebo ak si použil iný priečinok: `http://localhost/<nazov_priecinka>/`

6. (Keď začneš robiť DB) phpMyAdmin:
   - `http://localhost/phpmyadmin`

> Pozn.: kým je web ešte čisto HTML, XAMPP je “overkill”, ale je to najlepšia príprava na finálnu PHP verziu.

---

## 📌 Poznámky
- Tento repozitár je commitovaný **priebežne**.
- Cieľom je mať projekt unikátny v rámci ročníka (téma + dizajn + funkcionalita).
- Obsah je zameraný na učenie a dokumentáciu (homelab/CTF).

---
© 2026 SENTRIX™
