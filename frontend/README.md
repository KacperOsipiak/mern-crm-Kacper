# Frontend — Mini-CRM

Dit is je React-frontend voor de Mini-CRM. Vite is al voor je geconfigureerd.

## Eerste keer opzetten

In de `frontend` folder:

```bash
npm install
npm run dev
```

Je frontend draait nu op [http://localhost:5173](http://localhost:5173).

## Wat zit er al in?

- ✅ Vite + React (versie 18)
- ✅ Standaard mappenstructuur (`src/`, `public/`)
- ✅ Schone `App.jsx` als startpunt (geen Vite-demo, geen logo)
- ✅ Minimale CSS in `index.css`

## Wat installeer je later zelf?

Sommige packages installeer je later wanneer je ze nodig hebt:

- **Week 7:** `react-router-dom` (voor routing en Protected Routes)

## Mappenstructuur

```
frontend/
├── public/
├── src/
│   ├── App.jsx           # Hoofd-component (begin hier)
│   ├── main.jsx          # Entry point (laat staan)
│   ├── index.css         # Globale styling
│   └── components/       # Maak je zelf aan voor je eigen componenten
├── index.html
├── package.json
└── vite.config.js
```

## Tips

- Maak een nieuwe folder `src/components/` voor je eigen componenten (`ClientList.jsx`, `Client.jsx`, etc.)
- De CSS in `index.css` is minimaal — voel je vrij om aan te passen voor je eigen styling
- Backend draait op poort **4000**, frontend op poort **5173** — dit is al zo geconfigureerd in de backend CORS

## Problemen?

### ❌ "Cannot find module..."
Vergeet `npm install` niet uit te voeren in de `frontend` folder.

### ❌ "Network Error" bij fetch
Je backend draait niet, of CORS staat niet goed. Check:
- Draait je backend op poort 4000?
- Heb je `cors()` toegevoegd in je backend `server.js`?

### ❌ Port 5173 already in use
Een andere Vite-app draait al. Stop hem of gebruik een andere poort: `npm run dev -- --port 5174`.
