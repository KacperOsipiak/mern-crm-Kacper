# Week 3 — POST: nieuwe klant toevoegen

## Setup

Deze opdracht maak je in folder `mern-crm-[jouw-naam]`.

Je werkt in zowel `backend` (voor de POST-endpoint) als `frontend` (voor het formulier).

## Opdracht

Deze week voeg je de **C** van CRUD toe: het aanmaken van nieuwe klanten via een formulier in React dat verbinding maakt met je backend.

### Stap 1 — createClient functie

Voeg een `createClient` functie toe aan je `clientController`. Deze functie:

- Haalt `name`, `company`, `email`, `phone`, `status` en `notes` uit `req.body`.
- Maakt een nieuwe Client met `await Client.create({...})`.
- Stuurt de aangemaakte klant terug met status `201`.
- Vangt fouten op en stuurt status `400` met een foutmelding bij ongeldige input.

### Stap 2 — POST route

Voeg een POST-route toe in `clientRoutes.js` die `createClient` aanroept op `/api/clients`.

### Stap 3 — Test in Postman

Test je POST endpoint eerst in Postman:

- Method: `POST`
- URL: `http://localhost:4000/api/clients`
- Body: raw JSON met name, company, email, etc.
- Verwacht: status `201` en de aangemaakte klant terug.

### Stap 4 — AddClientForm component

Maak in je React-frontend een `AddClientForm` component met controlled inputs voor alle velden van een klant (gebruik `useState` per veld of één object).

### Stap 5 — handleSubmit functie

Voeg een `handleSubmit` functie toe die:

- `e.preventDefault()` doet om de standaard form-submit te voorkomen.
- Een POST-request stuurt naar je backend met JSON body.
- De input-velden leegmaakt na succes.
- De klantenlijst ververst zodat de nieuwe klant zichtbaar is (gebruik `setClients([...clients, nieuweKlant])` zonder volledige refetch).

## Theorie

Gebruik voor deze opdracht de onderstaande theorie:

- [MERN — Create & Read (POST endpoint)](https://meesterjson.nl/cheat-sheet/pages/mern/controllers-create-read.html)
- [MERN — Formulier Toevoegen (POST)](https://meesterjson.nl/cheat-sheet/pages/mern/frontend-add-form.html)

## Oplevering

Lever de volgende onderdelen in:

- POST endpoint `/api/clients` werkt en is getest in Postman.
- `AddClientForm` in React werkt: een nieuwe klant toevoegen verschijnt in de lijst.
- Form-velden worden leeggemaakt na succesvol toevoegen.
- Commit & Push naar GitHub en lever de link in via Canvas.
