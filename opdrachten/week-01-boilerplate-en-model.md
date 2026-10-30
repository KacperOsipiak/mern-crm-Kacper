# Week 1 — Boilerplate & Model

## Setup

Deze opdracht maak je in folder `mern-crm-[jouw-naam]`.

Klik op **'Use this template'** op de boilerplate-repository die je docent heeft gedeeld. Geef je nieuwe repo de naam `mern-crm-[jouw-naam]` en clone hem naar je computer.

> ⚠️ **Belangrijk — eerst `.gitignore` checken, dan pas `npm install`!**
> Controleer of er in de `backend` folder een `.gitignore` staat met in elk geval `node_modules/` en `.env` erin. Staat die er niet? Maak hem dan zelf aan vóór je `npm install` draait. Zonder `.gitignore` push je straks duizenden bestanden uit `node_modules` naar GitHub.

Voer daarna in de `backend` folder `npm install` uit en zet een MongoDB Atlas database op zoals beschreven in de hoofd-README.

## Opdracht

In deze eerste week zet je je backend volledig op: repository, database, environment variables en je eerste Model met bijbehorende controller en route.

### Stap 1 — Repository en MongoDB Atlas opzetten

- Clone je repository.
- Check dat er in de `backend` folder een `.gitignore` staat met `node_modules/` en `.env` erin. Zo niet: maak hem zelf aan vóór je verder gaat.
- Voer daarna `npm install` uit in de `backend` folder.
- Maak een gratis MongoDB Atlas account aan.
- Maak een M0 (FREE) cluster aan.
- Maak een database user aan en bewaar het wachtwoord.
- Voeg je IP toe aan Network Access (of `0.0.0.0/0`).
- Kopieer de connection string en sla die op.

### Stap 2 — Eigen .env aanmaken in de backend folder

- Maak een nieuw bestand `.env` (niet `.env.example` aanpassen!).
- Vul `PORT`, `MONGO_URI` en `NODE_ENV` in.
- Test of je server draait met `npm run dev`. Je moet **"Database verbonden & server draait"** in je terminal zien.

### Stap 3 — Maak je Client model

Maak `src/models/Client.js` (let op: hoofdletter!). Het schema bevat:

- `name` (String, required)
- `company` (String)
- `email` (String, required)
- `phone` (String)
- `status` (String, met enum: `"lead"`, `"actief"`, `"klant"`)
- `notes` (String)

Vergeet `timestamps` niet.

### Stap 4 — Maak je clientController

Maak `src/controllers/clientController.js` met de functie `getAllClients` die alle klanten ophaalt en als JSON terugstuurt.

### Stap 5 — Maak je clientRoutes

Maak `src/routes/clientRoutes.js` met één GET-route die `getAllClients` aanroept. Koppel de routes in `server.js` (de TODO staat er al).

### Stap 6 — Testen

Test je endpoint in Postman: `GET http://localhost:4000/api/clients`. Voeg eerst handmatig een klant toe in MongoDB Atlas om te zien of je GET werkt.

## Theorie

Gebruik voor deze opdracht de onderstaande theorie:

- [MERN — Node.js Setup](https://meesterjson.nl/cheat-sheet/pages/mern/setup.html)
- [MERN — Project Setup](https://meesterjson.nl/cheat-sheet/pages/mern/project-setup.html)
- [MERN — Server & Routes](https://meesterjson.nl/cheat-sheet/pages/mern/server-routes.html)
- [MERN — Database](https://meesterjson.nl/cheat-sheet/pages/mern/database.html)
- [MERN — Models & Schemas](https://meesterjson.nl/cheat-sheet/pages/mern/models-schemas.html)
- [MERN — Create & Read](https://meesterjson.nl/cheat-sheet/pages/mern/controllers-create-read.html)

## Oplevering

Lever de volgende onderdelen in:

- Werkende backend met MongoDB Atlas verbinding.
- Client model, clientController en clientRoutes zelf gemaakt.
- GET `/api/clients` endpoint werkt en is getest in Postman.
- Een schermafbeelding van Postman waarin je GET-resultaat te zien is. Plaats deze als `screenshots/week-01-postman-get.png`.
- Commit & Push je opdracht naar GitHub en lever de link in via Canvas.
