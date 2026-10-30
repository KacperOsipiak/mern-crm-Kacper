# Mini-CRM — MERN Boilerplate

Leerjaar 2 · Software Development · Periode 7

In deze periode bouw je een **Mini-CRM** (klantenbeheer-systeem). Dit is een tool die veel kleine bedrijven gebruiken om hun klanten bij te houden: naam, bedrijf, email, status (lead/actief/klant), notities.

De backend-setup (server, database-verbinding, mappenstructuur) is al voor je geregeld in deze boilerplate. Zo kun jij je focussen op wat écht belangrijk is: zelf een **Model**, **Controllers** en **Routes** bouwen.

## Cheat Sheet

Gebruik de cheat sheet als naslagwerk bij elke stap:
👉 [meesterjson.nl/cheat-sheet/pages/mern](https://meesterjson.nl/cheat-sheet/pages/mern/index.html)

## Opdrachten

De wekelijkse opdrachten vind je in de `opdrachten/` folder:
👉 [opdrachten/README.md](./opdrachten/README.md)

---

## Stap 1: Repository klaarzetten

1. Klik op **'Use this template'** → 'Create a new repository'
2. Kies je eigen GitHub-account als eigenaar
3. Geef de repository een naam: `mern-crm-[jouw-naam]`
4. Clone de repository naar je computer
5. Open de folder `backend` in je terminal
6. Voer `npm install` uit

---

## Stap 2: MongoDB Atlas opzetten

MongoDB Atlas is een gratis cloud-database. Je hebt geen lokale installatie nodig.

### 2.1 — Account aanmaken

1. Ga naar [mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
2. Maak een gratis account aan (of log in met Google)
3. Sla de "Welcome" vragen over of vul ze in zoals je wilt

### 2.2 — Cluster aanmaken

1. Klik op **'Create'** of **'Build a Database'**
2. Kies **M0 (FREE)** — dit is de gratis versie
3. Provider: **AWS** (of welke maakt niet uit)
4. Region: **Frankfurt (eu-central-1)** of **Ireland (eu-west-1)**
5. Cluster naam mag standaard blijven (`Cluster0`)
6. Klik **'Create Deployment'**

### 2.3 — Database user aanmaken

Je krijgt een venster om een gebruiker aan te maken:

1. **Username:** kies bijv. `admin`
2. **Password:** klik op **'Autogenerate Secure Password'** en **kopieer dit wachtwoord!** Bewaar het ergens veilig — je hebt het zo nodig.
3. Klik **'Create Database User'**

> ⚠️ **Let op:** als je wachtwoord speciale tekens bevat (zoals `@`, `:`, `/`), moet je die later URL-encoden in je connection string. Met "Autogenerate" gebeurt dit meestal automatisch goed.

### 2.4 — Network Access (IP whitelist)

1. Bij **'Where would you like to connect from?'** → kies **'My Local Environment'**
2. Klik **'Add My Current IP Address'**
3. Of (makkelijker voor school): klik **'Add Entry'** en typ `0.0.0.0/0` om vanaf elk netwerk te kunnen verbinden
4. Klik **'Finish and Close'**

### 2.5 — Connection string ophalen

1. Ga naar **'Database'** in het linker menu
2. Klik op **'Connect'** bij je cluster
3. Kies **'Drivers'** (Node.js)
4. Kopieer de connection string. Hij ziet er zo uit:
   ```
   mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Vervang `<password>` door je echte wachtwoord uit stap 2.3
6. Voeg een database-naam toe vóór de `?`. Bijvoorbeeld `crm-db`:
   ```
   mongodb+srv://admin:jouwWachtwoord@cluster0.xxxxx.mongodb.net/crm-db?retryWrites=true&w=majority
   ```

---

## Stap 3: Eigen .env aanmaken

In je `backend` folder staat een bestand `.env.example`. Dit is een **voorbeeld** — je moet zelf je eigen `.env` aanmaken.

1. Maak een nieuw bestand: `backend/.env`
2. Kopieer de inhoud van `.env.example` erin
3. Vul je gegevens in:

```
PORT=4000
MONGO_URI=mongodb+srv://admin:jouwWachtwoord@cluster0.xxxxx.mongodb.net/crm-db?retryWrites=true&w=majority
NODE_ENV=development
```

> ⚠️ **Belangrijk:** Het bestand `.env` mag NOOIT op GitHub komen! Het staat al in `.gitignore`, dus dat gebeurt automatisch niet. Maar deel je `.env` ook niet met klasgenoten — het bevat je wachtwoord.

---

## Stap 4: Server starten

In je `backend` folder:

```bash
npm run dev
```

Als alles werkt zie je in de terminal:
```
Database verbonden & server draait
```

En op [http://localhost:4000](http://localhost:4000) zie je in je browser:
```json
{ "message": "Mini-CRM backend draait!", "success": true }
```

🎉 Gefeliciteerd, je backend draait!

---

## Wat zit er al in de boilerplate?

- ✅ Express server opzet in `server.js`
- ✅ MongoDB verbinding (Mongoose)
- ✅ CORS configuratie
- ✅ Scripts (`npm run dev` met auto-restart)
- ✅ Dependencies klaar in `package.json`
- ✅ Mappenstructuur volgens de cheat sheet
- ✅ Frontend pre-geconfigureerd met Vite + React (in `frontend/`)
- ✅ Alle 9 weekopdrachten in `opdrachten/`

## Wat bouw jij zelf?

- 🔨 **Model** — `src/models/Client.js` (met hoofdletter!)
- 🔨 **Controller** — `src/controllers/clientController.js`
- 🔨 **Routes** — `src/routes/clientRoutes.js`
- 🔨 Routes koppelen in `server.js` (TODO staat er al in)
- 🔨 React-frontend (in een aparte folder)

---

## Mappenstructuur

```
mern-crm-[jouw-naam]/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Hier komt jouw clientController.js
│   │   ├── models/           # Hier komt jouw Client.js
│   │   ├── routes/           # Hier komt jouw clientRoutes.js
│   │   └── middleware/       # Leeg (komt later bij auth)
│   ├── .env                  # Jouw eigen config (zelf aanmaken!)
│   ├── .env.example          # Voorbeeld van .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js             # Entry point
├── frontend/                 # Pre-geconfigureerd met Vite + React
│   ├── src/
│   │   ├── App.jsx           # Begin hier in week 2
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── opdrachten/               # Wekelijkse opdrachten
│   ├── README.md
│   ├── week-01-...md
│   └── ...
└── screenshots/              # Hier plaats je je bewijs per week
    └── README.md
```

---

## Handige commando's

```bash
# Server starten (met auto-restart bij wijzigingen)
npm run dev

# Server stoppen
Ctrl + C
```

---

## Problemen?

### ❌ "Cannot find module mongoose"
Vergeet je `npm install` te doen? Check of je in de `backend` folder zit.

### ❌ "MongoNetworkError" of "ECONNREFUSED"
- Check of je `.env` bestaat en `MONGO_URI` correct is ingevuld
- Check MongoDB Atlas → **Network Access** → staat je IP erin (of `0.0.0.0/0`)?
- Check of je wachtwoord in de connection string klopt

### ❌ "MongoServerError: bad auth"
Je wachtwoord in `MONGO_URI` is fout. Ga naar Atlas → **Database Access** → reset wachtwoord en update je `.env`.

### ❌ "Port 4000 already in use"
Een oude server draait nog. Stop hem (Ctrl+C) of pas `PORT` aan in `.env`.

### ❌ "process.env.MONGO_URI is undefined"
Je gebruikt `npm run dev` niet, maar bijv. `node server.js`. De `--env-file=.env` zit alleen in het `dev`-script.

Voor meer hulp, zie de cheat sheet of vraag je docent.

---

*Gemaakt voor CMT Software Development · Leerjaar 2*