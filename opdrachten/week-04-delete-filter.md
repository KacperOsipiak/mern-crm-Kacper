# Week 4 — DELETE & filter op status

## Setup

Deze opdracht maak je in folder `mern-crm-[jouw-naam]`.

Je werkt in zowel `backend` (voor de DELETE-endpoint) als `frontend` (voor de knop en filter).

## Opdracht

Deze week voeg je de **D** van CRUD toe en bouw je een filter zodat je klanten op status kunt sorteren (lead, actief, klant).

### Stap 1 — deleteClient functie

Voeg een `deleteClient` functie toe aan je `clientController`. Deze functie:

- Haalt het `id` uit `req.params`.
- Valideert het id met `mongoose.isValidObjectId()` en geeft `400` bij ongeldige ID.
- Verwijdert de klant met `findOneAndDelete`.
- Geeft `404` als de klant niet gevonden is.
- Geeft de verwijderde klant terug bij succes.

### Stap 2 — DELETE route

Voeg een DELETE-route toe in `clientRoutes.js` op `/:id` en test in Postman of het werkt.

### Stap 3 — Verwijder-knop in React

Voeg in React een **Verwijder-knop** toe per klant die de klant uit de database verwijdert. De UI moet meteen geüpdatet worden zonder pagina-refresh.

> 💡 Gebruik `setClients(clients.filter(c => c._id !== id))` om de UI direct bij te werken.

### Stap 4 — StatusFilter component

Maak een `StatusFilter` component met drie knoppen: **Leads**, **Actief**, **Klanten** en **Alle**. Gebruik een `useState` voor de geselecteerde filter.

### Stap 5 — Filteren

Filter de klantenlijst frontend-side met `array.filter()` op basis van de geselecteerde status. De filter werkt op de bestaande lijst, je hoeft geen nieuwe fetch te doen.

## Theorie

Gebruik voor deze opdracht de onderstaande theorie:

- [MERN — Update & Delete](https://meesterjson.nl/cheat-sheet/pages/mern/controllers-update-delete.html)
- [MERN — Verwijderen & Filteren](https://meesterjson.nl/cheat-sheet/pages/mern/frontend-delete-filter.html)

## Oplevering

Lever de volgende onderdelen in:

- DELETE endpoint werkt en is getest in Postman.
- Verwijder-knop in React werkt: klant verdwijnt uit de lijst zonder refresh.
- `StatusFilter` werkt: je kunt klanten filteren op lead, actief, klant of alle.
- Commit & Push naar GitHub en lever de link in via Canvas.
