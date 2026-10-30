# Week 8 — Protected Routes & user-specific data

## Setup

Deze opdracht maak je in folder `mern-crm-[jouw-naam]`.

Je werkt zowel in de `backend` (middleware koppelen, controllers aanpassen) als de `frontend` (token meesturen, Protected Routes).

## Opdracht

Deze week beveilig je je client-routes: alleen ingelogde gebruikers kunnen klanten zien, en elke gebruiker ziet alleen zijn eigen klanten.

### Stap 1 — requireAuth middleware koppelen

Beveilig je client-routes met de `requireAuth` middleware. Open `clientRoutes.js` en voeg toe:

```js
import { requireAuth } from '../middleware/requireAuth.js';

// ... router definitie ...

router.use(requireAuth); // bovenaan, vóór alle routes
```

### Stap 2 — userId toevoegen aan Client schema

Voeg een `userId` veld toe aan je Client schema:

- Type: `mongoose.Schema.Types.ObjectId`
- `required: true`
- `ref: 'User'`

> ⚠️ **Belangrijk:** oude klanten zonder `userId` moet je verwijderen via MongoDB Atlas, anders krijg je errors.

### Stap 3 — Controllers aanpassen

Pas alle controller-functies aan om user-specific te werken:

- `getAllClients` → `Client.find({ userId: req.user._id })`
- `createClient` → voeg `userId: req.user._id` toe aan `create`.
- `updateClient` → `findOneAndUpdate({ _id: id, userId: req.user._id }, ...)`
- `deleteClient` → `findOneAndDelete({ _id: id, userId: req.user._id })`

### Stap 4 — Token meesturen in frontend

Pas in React je fetch-calls aan om de token mee te sturen in de Authorization header:

```js
headers: { 'Authorization': `Bearer ${token}` }
```

Doe dit voor GET, POST, PATCH en DELETE.

### Stap 5 — Protected Routes in React

Implementeer **Protected Routes** in React: pagina's die alleen toegankelijk zijn als de gebruiker is ingelogd. Niet-ingelogde gebruikers worden naar de loginpagina gestuurd.

### Stap 6 — Testen met twee accounts

Test met twee verschillende accounts:

- Maak account A en voeg een klant toe.
- Maak account B en voeg een andere klant toe.
- Check of beide accounts alleen hun eigen klanten zien.
- Probeer met account B een klant van account A te verwijderen — moet 404 geven.

## Theorie

Gebruik voor deze opdracht de onderstaande theorie:

- [MERN — Protected Routes (Backend)](https://meesterjson.nl/cheat-sheet/pages/mern/protected-routes.html)
- [MERN — Protected Routes & Bearer Token (Frontend)](https://meesterjson.nl/cheat-sheet/pages/mern/frontend-protected.html)

## Oplevering

Lever de volgende onderdelen in:

- Client-routes beveiligd met `requireAuth` middleware.
- Alle CRUD-operaties werken alleen voor de eigen klanten van de ingelogde user.
- Protected Routes in React: niet-ingelogde gebruikers worden doorgestuurd.
- Test met twee accounts geslaagd: gebruikers zien elkaars data niet.
- Een schermopname die de werking demonstreert (twee accounts wisselen). Plaats deze als `screenshots/week-08-twee-accounts.mp4` of voeg een Loom/YouTube link toe in `screenshots/week-08-demo.md`.
- Commit & Push naar GitHub en lever de link in via Canvas.
