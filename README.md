# SENTRIX™ — Cyber Security Lab & Writeups

**S**ecurity  
**E**vent  
**N**etwork  
**T**hreat  
**R**esponse  
**I**ntelligence  
**X**‑Ops  
--- ™

SENTRIX™ je futuristická webová stránka (téma **cyber security**) určená ako:
- **lab/portfolio web** – miesto, kde budem publikovať vlastné **writeups** a poznámky,
- prehľad mojich **tools & techniques** (napr. web testing, network analysis, logy/detekcie),
- **roadmap** toho, ako sa projekt bude počas roka meniť na plnohodnotnú PHP aplikáciu.

> Všetky testy a ukážky sú myslené iba pre **legálne/autorizované prostredia** (homelab, CTF).

---

## Čo na stránke nájdeš

- **Domov (`index.html`)**  
  Úvod projektu + hlavné zamerania + rýchle odkazy.

- **Writeups (`ai_platforma.html`)**  
  Sekcia pre články / lab notes. Neskôr bude napojená na databázu (CRUD nad článkami).

- **Roadmap (`transformacia.html`)**  
  Stránka s plánom vývoja (čo sa bude robiť a aké školské požiadavky projekt spĺňa).

- **Tools (`techno_riesenia.html`)**  
  Prehľad nástrojov a postupov (web, sieť, monitoring).

- **Komunita (`komunita.html`)**  
  Demo prvkov (front-end chat/komentáre + mini hra).

- **Login (`login.html`)**  
  Zatiaľ front-end UI. Neskôr sa prerobí na reálny login v PHP + MySQL (sessions).

---

## Ako spustiť projekt

### 1) Najjednoduchšie (staticky)
Otvor `index.html` v prehliadači (double-click).

> Niektoré veci môžu fungovať lepšie cez lokálny server (hlavne keď začneš robiť PHP).

---

### 2) VS Code Live Server
1. Nainštaluj rozšírenie **Live Server**
2. Pravým klikom na `index.html` → **Open with Live Server**

---

### 3) Python lokálny server
V priečinku projektu spusti:

```bash
python -m http.server 8080
```

Potom otvor:
- http://localhost:8080/

---

### 4) XAMPP (odporúčané pre budúce PHP + MySQL)
Táto varianta je ideálna, keď začneš prerábať projekt do PHP.

1. Nainštaluj **XAMPP**
2. Otvor **XAMPP Control Panel**
3. Zapni:
   - **Apache**
   - **MySQL** (môže byť už teraz)
4. Skopíruj alebo naklonuj projekt do:
   - Windows: `C:\xampp\htdocs\sentrix\`
   - Linux: `/opt/lampp/htdocs/sentrix/`
   - macOS: `/Applications/XAMPP/htdocs/sentrix/`
5. Otvor v prehliadači:
   - `http://localhost/sentrix/`
6. phpMyAdmin (keď budeš riešiť DB):
   - `http://localhost/phpmyadmin`

---

## Poznámka k budúcej PHP verzii (stručne)
Cieľ je prerobiť projekt na aplikáciu v **čistom PHP 8 + MySQL**, ktorá bude obsahovať:
- OOP štruktúru (DB trieda, repository, controllers…)
- CRUD nad entitou **Articles/Writeups**
- login/logout cez sessions
- bezpečné spracovanie vstupov (PDO prepared statements, escaping, CSRF)

---
© 2026 SENTRIX™
