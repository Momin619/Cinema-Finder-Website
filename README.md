# Cinema Finder

Completed as part of the **Datacom Software Development Job Simulation** on [Forage](https://www.theforage.com/simulations/datacom/software-development-l47g). The original task was to identify and fix bugs in an existing codebase — instead, I rebuilt the entire project from scratch based on the original site's concept.

**[View Completion Certificate](./certificate/datacom-forage-certificate.png)**

⚠️ All cinema data is dummy/fake — this is a practice/simulation project.

---

## Key Features

- 🗺️ Interactive map with clickable cinema markers
- 📋 Details panel with movies, price, address & reviews
- 📍 "Locate Me" shows your position on the map
- 🎟️ Booking modal with name, date & seat fields
- 🔔 Toast notification on booking confirmation

---

## How It Works

1. Cinemas load as red markers on the map
2. Click a marker → it turns green & details appear on the right
3. Click **"Book Ticket"** → fill the form → get a success toast
4. Click **"Locate Me"** → your location appears as a blue marker

---

## Technologies

| Technology              | Use                 |
| ----------------------- | ------------------- |
| React 19                | UI framework        |
| Vite                    | Build tool          |
| Tailwind CSS v4         | Styling             |
| Leaflet + React Leaflet | Interactive map     |
| React Hot Toast         | Toast notifications |
| React Icons             | Icons               |

---

## Run Locally

```bash
git clone https://github.com/Momin619/Cinema-Finder-Website
cd cinema-finder-website
npm install
npm run dev
```

Open `http://localhost:5173`

---

## Folder Structure

```
src/
├── App.jsx
├── components/
│   ├── MapView.jsx
│   ├── DetailsPanel.jsx
│   ├── BookingModal.jsx
│   └── LocateMe.jsx
├── data/
│   └── cinemas.js
└── styles/
```
