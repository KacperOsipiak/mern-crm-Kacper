# Week 5 — PATCH: klant bewerken

## Setup

Deze opdracht maak je in folder `mern-crm-[jouw-naam]`.

Je werkt in zowel `backend` (voor de PATCH-endpoint) als `frontend` (voor het edit-form).

## Opdracht

Deze week voeg je de **U** van CRUD toe: bestaande klanten bewerken. Dit is technisch wat lastiger dan POST omdat je een form moet voorvullen met huidige waarden.

### Stap 1 — updateClient functie

Voeg een `updateClient` functie toe aan je `clientController`. Deze functie:

- Haalt het `id` uit `req.params`.
- Valideert het id met `mongoose.isValidObjectId()`.
- Gebruikt `findOneAndUpdate` met optie `{ new: true }` zodat je de bijgewerkte versie terugkrijgt.
- Geeft `404` als de klant niet gevonden is.

### Stap 2 — PATCH route

Voeg een PATCH-route toe in `clientRoutes.js` op `/:id`. Test in Postman: stuur alleen de velden die je wilt aanpassen mee in de body.

### Stap 3 — EditClientForm component

Maak een `EditClientForm` component die een bestaande klant ontvangt als prop en alle huidige waarden voorvult in de input-velden.

> 💡 Gebruik `useState(client.name)` als initial value zodat de waarden voorgevuld zijn.

### Stap 4 — Bewerk-knop

Voeg een **Bewerk-knop** toe per klant in je lijst. Door op deze knop te klikken open je het `EditClientForm` met die klant geladen.

### Stap 5 — handleUpdate functie

Implementeer een `handleUpdate` functie die:

- Een PATCH-request stuurt met alleen de aangepaste velden.
- De klant in de lijst meteen bijwerkt zonder volledige refresh.
- Het bewerk-form sluit na succesvol opslaan.

> 💡 Gebruik `setClients(clients.map(c => c._id === updated._id ? updated : c))` om de UI direct bij te werken.

## Theorie

Gebruik voor deze opdracht de onderstaande theorie:

- [MERN — Update & Delete](https://meesterjson.nl/cheat-sheet/pages/mern/controllers-update-delete.html)
- [MERN — Bewerken (PATCH)](https://meesterjson.nl/cheat-sheet/pages/mern/frontend-edit-form.html)

## Oplevering

Lever de volgende onderdelen in:

- PATCH endpoint werkt en is getest in Postman.
- `EditClientForm` vult alle huidige waarden voor.
- Klant bijwerken in React werkt en de lijst wordt direct geüpdatet.
- Commit & Push naar GitHub en lever de link in via Canvas.
