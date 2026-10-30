# Week 7 — Auth in de frontend

## Setup

Deze opdracht maak je in folder `mern-crm-[jouw-naam]/frontend`.

Je werkt deze week alleen in de frontend. De backend (week 6) draait ondersteunend op de achtergrond.

Voor het aanmaken van Login- en Register-pagina's heb je **routing** nodig. Installeer hiervoor `react-router-dom` in je `frontend` folder:

```bash
npm install react-router-dom
```

> 💡 Dit doe je éénmalig — vanaf nu zit het in je `package.json`.

## Opdracht

Deze week verbind je de auth-backend met je React-frontend. Gebruikers kunnen zich registreren, inloggen en uitloggen via de UI.

### Stap 1 — Router opzetten

Open `main.jsx` en wikkel je app in een `BrowserRouter` zodat je routing kunt gebruiken:

```jsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

In je `App.jsx` zet je de routes op:

```jsx
import { Routes, Route } from 'react-router-dom'
// ... import je pagina's

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
```

### Stap 2 — AuthContext maken

Maak een `AuthContext` in React die de huidige user en token globaal beschikbaar maakt:

- Gebruik de Context API (`createContext` + `useContext`).
- Bewaar `user` en `token` in state.
- Voorzie een `login`, `register` en `logout` functie.
- Wikkel je hele app in `<AuthProvider>` in `main.jsx` (binnen de `BrowserRouter`).

### Stap 3 — Login pagina

Maak een **Login** pagina met een form voor email en wachtwoord. Bij submit:

- POST naar `/api/auth/login`.
- Bij succes: sla token op in `localStorage` en in de `AuthContext`.
- Bij fout: toon foutmelding aan gebruiker.

### Stap 4 — Register pagina

Maak een **Register** pagina met dezelfde structuur, maar dan POST naar `/api/auth/register`.

### Stap 5 — Logout functie

Voeg een `logout` functie toe die:

- De token uit `localStorage` verwijdert.
- De user uit de `AuthContext` leegmaakt.
- De gebruiker terugstuurt naar de loginpagina.

### Stap 6 — Ingelogd blijven na refresh

Voeg bij het laden van de app een `useEffect` toe die controleert of er al een token in `localStorage` staat. Als die er is, vul de `AuthContext` zodat de gebruiker ingelogd blijft na refresh.

## Theorie

Gebruik voor deze opdracht de onderstaande theorie:

- [MERN — Auth in de Frontend](https://meesterjson.nl/cheat-sheet/pages/mern/frontend-auth.html)

## Oplevering

Lever de volgende onderdelen in:

- `AuthContext` werkt en is gebruikt in meerdere componenten.
- Login en Register pagina's werken volledig.
- Logout-functie werkt.
- Token blijft bewaard na page refresh.
- Commit & Push naar GitHub en lever de link in via Canvas.