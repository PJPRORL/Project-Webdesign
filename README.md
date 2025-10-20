# 🌐 Webdesign Project — Persoonlijke Website

Welkom! In dit project bouw ik een persoonlijke website die meegroeit met mijn opleiding en werkervaring. Je ontdekt wie ik ben, waar ik mee bezig ben op school, wat ik professioneel doe en welke hobby’s en interesses mij typeren. Doorheen het schooltraject zal de site evolueren met nieuwe pagina’s, functionaliteiten en content.

> **Doel**: een duidelijke, snelle en toegankelijke website die inhoudelijk sterk is én consistent ontworpen is met een herkenbare huisstijl.

---

## 📚 Inhoudsopgave

- [Over het project](#-over-het-project)
- [Pagina’s & informatie-architectuur](#-paginas--informatie-architectuur)
  - [Start (Index)](#start-index)
  - [Contact](#contact)
  - [Ervaring](#ervaring)
  - [Traject School](#traject-school)
  - [Over mij](#over-mij)
- [Huisstijl & Design](#-huisstijl--design)
  - [Kleurenschema](#kleurenschema)
  - [Typografie](#typografie)
- [Media & Copyright](#-media--copyright)
- [Navigatie & UX](#-navigatie--ux)
- [Formulieren & Data](#-formulieren--data)
- [Mappenstructuur](#-mappenstructuur)
- [Technologie & Werkwijze](#-technologie--werkwijze)
- [Roadmap](#-roadmap)
- [Credits](#-credits)

---

## 🔎 Over het project

Deze website combineert **persoonlijk** (hobby’s, interesses, woonplaats/stad) en **school/werk** (traject, competenties, projecten, jobtaken). Je kan de vooruitgang volgen en ontdekken wat ik leer en maak doorheen het academiejaar. De site fungeert als **portfolio** én als **dagboek** van mijn ontwikkeling.

De homepagina geeft een korte uitleg over het project en toont welke secties je kan bezoeken. Sommige pagina’s hebben een achterliggende detailpagina voor verdieping. Nieuwsgierig? Dan kan je makkelijk doorklikken naar elk onderdeel.

---

## 🧭 Pagina’s & informatie-architectuur

> Overzicht van de kernpagina’s en hun doel. De site groeit modulair mee, dus de structuur blijft uitbreidbaar.

### Start (Index)

- **Doel**: introductie tot het project en snelle toegang tot alle hoofdsecties.
- **Inhoud**: korte pitch, overzichtstegels per sectie, visuele preview/mock-ups van belangrijke pagina’s (alfaversies om layout te testen).
- **Opmerking**: tijdens de opmaak worden soms contrasterende _placeholder_ achtergrondkleuren gebruikt om secties duidelijk af te bakenen; in productie worden deze vervangen door de finale huisstijl.

### Contact

- **Doel**: kennismaking en contact opnemen.
- **Inhoud**: stad waarin ik woon, korte intro over mezelf, **huisdieren** (korte fiches + foto’s), **links** naar **Hobby’s** en **Interesses** met korte teasers, en een **contactformulier** (naam, e‑mail, onderwerp/bericht, privacycheckbox).

### Ervaring

- **Doel**: transparant overzicht van mijn **studentencarrière** en **werkervaring**.
- **Inhoud**: voorbeelden van **jobtaken** (met foto’s), **tools/technieken**, en een **scrollbare inhoudsopgave** (à la Word) waarmee je direct naar secties springt (Student → Opleidingen/Projecten, Werk → Taken/Tools).
- **UX**: sticky zijbalk met een “Inhoudsopgave” component en “terug naar boven” knop.

### Traject School

- **Doel**: verdiepen in opleidingen en leerpaden.
- **Inhoud**: welkomstpagina met keuze voor o.a. **Webdesign**, **Programmeren** en **Databanken**, inclusief **geleerde competenties** en voorbeelden. De look & feel leunt aan bij het Thomas More kleurbeeld, terwijl subpagina’s eigen accenten krijgen.

### Over mij

- **Doel**: laten zien wie ik ben buiten school/werk.
- **Inhoud**: **Hobby‑pagina’s** met elk een eigen stijl (binnen de huisstijl):
  - **Fitness** (korte pagina met enkele foto’s en context),
  - **Computers & hardware** (uitleg + fotomateriaal van builds/collectie),
  - **Gaming** (waarom dit mijn passie is en link met opleiding).
- **Interesse‑pagina’s** (o.a. **Formule 1**, **PC‑bouwen**, **Games**) met compacte tabellen, interlinks en “spring naar sectie” ankers.

---

## 🎨 Huisstijl & Design

### Kleurenschema

- **Primair**: **Wit** — hoofdzakelijk in de body/background voor rust en leesbaarheid.
- **Secundair**: **Oranje** — prominent in de navigatiebalk/headers, voor herkenbaarheid en dynamiek.
- **Tertiair/Accent**: gebruikt voor **hover‑states**, focus‑indicatoren en callouts.

**Aanbevolen CSS‑variabelen**

```css
:root {
  --color-bg: #ffffff;
  --color-text: #111111;
  --color-secondary: #ff7a00; /* oranje voor navigatie */
  --color-accent: #3a8fff; /* accent/hover, later verfijnbaar */
  --radius-lg: 16px;
  --space: 1rem;
  --font-headings: "KG Second Changes", system-ui, -apple-system, "Segoe UI", Roboto,
    Arial, sans-serif;
  --font-body: "LEORIO", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}
```

### Typografie

- **Headings**: _KG Second Changes_ (voor H1–H3).
- **Lopende tekst & UI**: _LEORIO_.
- **Fallbacks**: systeemfonts voor performance en compatibiliteit.
- **Toegankelijkheid**: basiscontrast ≥ WCAG AA, comfortabele line‑height en font‑sizes (16px+).

---

## 🖼️ Media & Copyright

- Foto’s komen **voornamelijk uit eigen camera/telefoon**. Indien extern materiaal nodig is, wordt **rechtenvrij** beeld (bv. Unsplash) gebruikt met correcte vermelding/attributie.
- Afbeeldingen worden **geoptimaliseerd** (voorkeur **JPEG** waar mogelijk, enkel **PNG** voor transparantie/illustraties) om laadtijden te verlagen.
- Alt‑teksten en `lazy-loading` worden standaard toegepast.

---

## 🧩 Navigatie & UX

- **Globale navigatie** met duidelijke actieve‑staat en focus‑indicatie.
- **Inhoudsopgave (TOC) component** op pagina’s met veel content (zoals _Ervaring_).
- **Interne ankers** (`#sectie`) en **“terug naar boven”** knop.
- **Responsief** grid‑systeem; kaarten en secties schalen vloeiend van mobiel → desktop.
- **Form UX**: inline validatie, duidelijke foutmeldingen en duidelijke status na verzenden.

---

## 📨 Formulieren & Data

**Contactformulier (voorbeeld velden)**

- `naam` (verplicht)
- `email` (verplicht, e‑mailvalidatie)
- `onderwerp` (optioneel)
- `bericht` (verplicht)
- `privacy_ok` (checkbox – verplicht)

---

## 🗂️ Mappenstructuur

> Gestructureerd en uitbreidbaar. Per pagina kan, indien gewenst, een aparte CSS worden voorzien.

```
/ (project-root)
├─ index.html
├─ pages/
│  ├─ contact.html
│  ├─ ervaring.html
│  ├─ traject/
│  │  ├─ index.html          # overzicht opleidingen + competenties
│  │  ├─ webdesign.html
│  │  ├─ programmeren.html
│  │  └─ databanken.html
│  ├─ prive/
│  │  ├─ index.html          # overzicht hobby's
│  │  ├─ hobby-fitness.html
│  │  ├─ hobby-hardware.html
│  │  └─ hobby-gaming.html
│  └─ interesses/
│     ├─ index.html
│     ├─ f1.html
│     ├─ pc-bouwen.html
│     └─ games.html
├─ styles/
│  ├─ base.css               # reset, typografie, variabelen
│  ├─ layout.css             # grid, containers, spacing
│  ├─ components.css         # knoppen, kaarten, navigatie, TOC
│  └─ pages/                 # optionele pagina-specifieke stijlen
│     ├─ contact.css
│     └─ ervaring.css
├─ scripts/
│  ├─ main.js                # init, toggles, helpers
│  ├─ toc.js                 # inhoudsopgave + anchor scroll
│  ├─ form-validate.js       # validatieregels + submit feedback
│  └─ components/            # kleinere JS-componenten (optioneel)
├─ assets/
│  ├─ images/
│  │  ├─ pets/
│  │  ├─ hobbies/
│  │  └─ traject/
│  ├─ icons/
│  └─ fonts/
├─ data/
│  ├─ pets.json
│  ├─ experiences.json
│  └─ education.json
└─ docs/
   └─ README.md
```

---

## 🛠️ Technologie & Werkwijze

- **Stack**: HTML5, CSS3 en Bootstrap (Project 2)..
- **Accessibility**: semantische HTML, toetsenbordnavigatie, aria‑labels waar nodig.
- **Versiebeheer**: Git (feature branches per pagina/feature).
- **Mock-ups/Wireframes**: lage‑fidelity schetsen om layout te valideren; verfijning in iteraties.

---

## 🧭 Roadmap

1. **Fase 1** — Structuur & basislayout
   - Mappenstructuur, header/footer, typografie en basiskleuren.
2. **Fase 2** — Content & navigatie
   - Start/Contact/Ervaring gevuld; TOC‑component implementeren.
3. **Fase 3** — Traject & Privé
   - Opleidingspagina’s + hobby/interesse‑pagina’s, kleine tabellen en ankers.
4. **Fase 4** — Optimalisaties
   - Form UX, accessibility‑pass, performance‑tweaks, cross‑device testing.
5. **Fase 5** — Publicatie & feedback
   - Hosten, feedback verwerken, iteratief verbeteren.

---

## 🙌 Credits

- Analyse en inhoudelijke lijnen gebaseerd op het projectplan voor het webdesigntraject (paginastructuur, contact/ervaring/traject/privé, kleur‑ en typokeuzes).
- Foto’s: eigen materiaal waar mogelijk; extern materiaal met correcte bronvermelding.
