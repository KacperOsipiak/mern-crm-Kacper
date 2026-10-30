# Week 2 — React koppelen aan GET

## Setup

Deze opdracht maak je in folder `mern-crm-[jouw-naam]/frontend`.

De frontend (Vite + React) is al voor je geconfigureerd in deze folder. Je hoeft Vite **niet** zelf te installeren.

In de `frontend` folder:

```bash
npm install
npm run dev
```

Je frontend draait nu op [http://localhost:5173](http://localhost:5173).

> 💡 Tip: open twee terminals — één voor je backend (`cd backend && npm run dev`) en één voor je frontend (`cd frontend && npm run dev`). Beide moeten tegelijk draaien.

## Opdracht

In deze week bouw je de frontend: een React-app die jouw eigen backend aanroept en de klanten toont.

### Stap 1 — Frontend starten

Volg de setup hierboven. Open de app in je browser via [http://localhost:5173](http://localhost:5173). Je ziet een placeholder met "Mini-CRM" — die ga je vervangen.

> 💡 **CORS error?** Dan staat CORS nog niet aan in je backend. Zie de cheat sheet.

### Stap 2 — ClientList component

Maak een nieuwe folder `src/components/` en daarin een bestand `ClientList.jsx`. Deze component haalt alle klanten uit je backend op en toont ze. Gebruik:

- `useState` om de array van klanten op te slaan.
- `useEffect` met lege dependency array zodat de fetch maar één keer plaatsvindt.
- `fetch` naar `http://localhost:4000/api/clients`.
- Map over de array om elke klant te tonen.

Importeer `ClientList` in `App.jsx` en vervang de placeholder.

### Stap 3 — Client component

Maak in `src/components/` een bestand `Client.jsx`. Dit component ontvangt één klant als prop en toont de gegevens netjes (naam, bedrijf, email, telefoon, status).

Gebruik dit component in je map-functie van `ClientList`.

### Stap 4 — Loading en error states

Voeg loading en error states toe aan `ClientList`:

- Een `useState` voor `isLoading` (`true` tijdens fetch, `false` daarna).
- Een `useState` voor `error` (`null` in begin, foutmelding bij `catch`).
- Toon `"Laden..."` tijdens loading en de foutmelding bij een error.

### Stap 5 — Testen

Test of alles werkt: voeg via MongoDB Atlas of een POST in Postman een paar klanten toe en kijk of ze in je React-app verschijnen.

## Theorie

Gebruik voor deze opdracht de onderstaande theorie:

- [MERN — CORS in Backend](https://meesterjson.nl/cheat-sheet/pages/mern/cors-frontend.html)
- [MERN — Frontend Setup](https://meesterjson.nl/cheat-sheet/pages/mern/frontend-setup.html)
- [MERN — Lijst Tonen (GET)](https://meesterjson.nl/cheat-sheet/pages/mern/frontend-list.html)
- [MERN — Loading & Error States](https://meesterjson.nl/cheat-sheet/pages/mern/frontend-loading-error.html)

## Oplevering

Lever de volgende onderdelen in:

- Werkende React-frontend met `ClientList` en `Client` component.
- `ClientList` haalt klanten op uit jouw eigen backend.
- Loading en error states werken correct.
- Een schermopname waarin je de werkende app toont. Plaats deze als `screenshots/week-02-app-werkt.mp4` of voeg een Loom/YouTube link toe in `screenshots/week-02-demo.md`.
- Commit & Push naar GitHub en lever de link in via Canvas.