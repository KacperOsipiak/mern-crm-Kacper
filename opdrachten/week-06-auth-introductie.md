# Week 6 — Authenticatie introductie

## Setup

Deze opdracht maak je in folder `mern-crm-[jouw-naam]/backend`.

Je krijgt (via Canvas) **vier bestanden** met de auth-uitbreiding. Deze bestanden zijn al voor je gemaakt — je hoeft ze alleen toe te voegen aan jouw project.

De bestanden:
- `User.js`
- `authController.js`
- `authRoutes.js`
- `requireAuth.js`

## Opdracht

Deze week voeg je authenticatie toe aan je backend: gebruikers kunnen zich registreren en inloggen, en je krijgt JWT-tokens terug.

### Stap 1 — Extra packages installeren

In je `backend` folder (waar `package.json` staat):

```bash
npm install jsonwebtoken bcrypt
```

### Stap 2 — Bestanden op de juiste plek zetten

Plaats de bestanden die je hebt gekregen op de juiste plek in jouw project:

| Bestand | Plek in jouw project |
|---------|---------------------|
| `User.js` | `backend/src/models/User.js` |
| `authController.js` | `backend/src/controllers/authController.js` |
| `authRoutes.js` | `backend/src/routes/authRoutes.js` |
| `requireAuth.js` | `backend/src/middleware/requireAuth.js` |

> 💡 Let op: bestand**snamen** met hoofdletter zoals ze zijn aangeleverd!

### Stap 3 — JWT secret toevoegen aan .env

Open je `.env` en voeg een regel toe:

```
JWT_SECRET=jouw_super_geheime_string_12345
```

Of genereer een veilige secret met dit commando:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Kopieer de output en gebruik die als waarde voor `JWT_SECRET`.

### Stap 4 — Auth routes koppelen in server.js

Open je `server.js` en voeg bovenaan toe:

```js
import authRoutes from './src/routes/authRoutes.js';
```

Bij de routes-sectie voeg je toe:

```js
app.use('/api/auth', authRoutes);
```

Pas ook je CORS aan zodat alleen je frontend mag verbinden:

```js
app.use(cors({ origin: 'http://localhost:5173' }));
```

### Stap 5 — Server herstarten en testen in Postman

Stop je server (Ctrl+C) en start opnieuw met `npm run dev`.

Test in Postman:

**Register:**
- Method: `POST`
- URL: `http://localhost:4000/api/auth/register`
- Body: raw JSON
  ```json
  {
    "email": "test@test.nl",
    "password": "wachtwoord123"
  }
  ```
- Verwacht: status `201` met token terug.

**Login:**
- Method: `POST`
- URL: `http://localhost:4000/api/auth/login`
- Body: dezelfde JSON.
- Verwacht: status `200` met token terug.

Test ook met fouten:
- Te kort wachtwoord (minder dan 6 karakters) → moet foutmelding geven.
- Bestaande email opnieuw registreren → moet foutmelding geven.
- Foutief wachtwoord bij login → moet foutmelding geven.

### Stap 6 — Database controleren

Open MongoDB Atlas en bekijk je `User`-collection. Het wachtwoord moet als **gehashte string** opgeslagen zijn (lange onleesbare string die begint met `$2b$10$...`), niet als platte tekst.

Als je daar je echte wachtwoord ziet staan, klopt er iets niet — vraag je docent.

## Theorie

Gebruik voor deze opdracht de onderstaande theorie:

- [MERN — Authentication Basics](https://meesterjson.nl/cheat-sheet/pages/mern/authentication.html)

## Oplevering

Lever de volgende onderdelen in:

- Auth-bestanden correct toegevoegd aan je project (op de juiste plek).
- Extra packages geïnstalleerd (`bcrypt`, `jsonwebtoken`).
- `JWT_SECRET` toegevoegd aan `.env`.
- `server.js` aangepast met `authRoutes` en CORS-update.
- Register en login endpoints werken in Postman.
- Wachtwoord wordt gehashed opgeslagen in MongoDB.
- Een schermafbeelding van Postman met succesvolle register en login. Plaats deze als `screenshots/week-06-postman-register-login.png`.
- Commit & Push naar GitHub en lever de link in via Canvas.
