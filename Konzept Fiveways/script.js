const competencies = ["Resilienz", "Selbstorganisation", "Gesundheit", "Lernen", "Soziales"];

const actions = [
  {
    id: "stress",
    icon: "∿",
    needLabel: "Ich bin gestresst",
    selectedText: "gestresst",
    recommendationIntro: "Bei Stress empfehlen wir dir jetzt:",
    hint: "kurz runterkommen",
    filter: "Stress",
    title: "3-Minuten Atem-Reset",
    description: "Eine kurze Übung, um dein Nervensystem zu beruhigen und wieder klarer zu werden.",
    duration: "3 Min",
    competence: "Resilienz",
    steps: [
      "Setz dich bequem hin und lege beide Füße auf den Boden.",
      "Atme 4 Sekunden ein und 6 Sekunden aus.",
      "Wiederhole das ruhig für ein paar Atemzüge und frage dich danach: Was ist jetzt der nächste kleine Schritt?"
    ]
  },
  {
    id: "overwhelmed",
    icon: "≡",
    needLabel: "Ich bin überfordert",
    selectedText: "überfordert",
    recommendationIntro: "Bei Überforderung empfehlen wir dir jetzt:",
    hint: "Gedanken ordnen",
    filter: "Fokus",
    title: "Gedanken sortieren",
    description: "Schreibe kurz auf, was gerade alles in deinem Kopf ist. Danach wählst du nur den nächsten kleinen Schritt.",
    duration: "4 Min",
    competence: "Selbstorganisation",
    steps: [
      "Notiere alles, was dich gerade beschäftigt.",
      "Markiere nur eine Sache, die wirklich als Nächstes wichtig ist.",
      "Formuliere daraus einen kleinen Schritt, den du heute schaffen kannst."
    ]
  },
  {
    id: "sleep",
    icon: "◐",
    needLabel: "Ich kann nicht schlafen",
    selectedText: "Schlafprobleme",
    recommendationIntro: "Bei Schlafproblemen empfehlen wir dir jetzt:",
    hint: "abends runterkommen",
    filter: "Schlaf",
    title: "Abendlicher Ruhemodus",
    description: "Eine kurze Routine, um Kopfkino zu reduzieren und den Tag mental abzuschließen.",
    duration: "5 Min",
    competence: "Gesundheit",
    steps: [
      "Schreib drei Gedanken auf, die du für heute ablegen möchtest.",
      "Notiere einen Satz: „Für heute ist genug.“",
      "Atme langsam aus und richte deine Aufmerksamkeit auf deinen Körper."
    ]
  },
  {
    id: "exam",
    icon: "⌁",
    needLabel: "Ich habe Prüfungsdruck",
    selectedText: "Prüfungsdruck",
    recommendationIntro: "Bei Prüfungsdruck empfehlen wir dir jetzt:",
    hint: "Lernen sortieren",
    filter: "Lernen",
    title: "Prüfungsdruck entladen",
    description: "Sortiere, was wirklich prüfungsrelevant ist, und plane deinen nächsten Lernblock.",
    duration: "5 Min",
    competence: "Lernen",
    steps: [
      "Schreibe auf, was konkret geprüft wird.",
      "Wähle ein Thema, das als Nächstes den größten Effekt hat.",
      "Plane einen Lernblock von 25 Minuten mit genau einer Aufgabe."
    ]
  },
  {
    id: "focus",
    icon: "◎",
    needLabel: "Ich brauche Fokus",
    selectedText: "Fokusbedarf",
    recommendationIntro: "Für mehr Fokus empfehlen wir dir jetzt:",
    hint: "Ablenkung reduzieren",
    filter: "Fokus",
    title: "Fokus-Reset",
    description: "Eine kurze Übung, um Ablenkung zu reduzieren und mit einer klaren Aufgabe zu starten.",
    duration: "2 Min",
    competence: "Selbstorganisation",
    steps: [
      "Lege alles weg, was du jetzt nicht brauchst.",
      "Formuliere eine einzige Aufgabe für die nächsten 15 Minuten.",
      "Starte mit dem kleinsten sichtbaren Schritt."
    ]
  },
  {
    id: "alone",
    icon: "＋",
    needLabel: "Ich fühle mich allein",
    selectedText: "das Gefühl von Alleinsein",
    recommendationIntro: "Wenn du dich allein fühlst, empfehlen wir dir jetzt:",
    hint: "Kontakt leichter machen",
    filter: "Beziehungen",
    title: "Kleiner Kontaktimpuls",
    description: "Wähle eine einfache Kontaktaktion, die heute realistisch ist.",
    duration: "3 Min",
    competence: "Soziales",
    steps: [
      "Denke an eine Person, bei der Kontakt niedrigschwellig möglich ist.",
      "Schreibe eine kurze Nachricht, ohne sie perfekt machen zu wollen.",
      "Sende sie ab oder speichere sie als ersten Schritt."
    ]
  }
];

const knowledgeItems = [
  {
    id: "stress-focus",
    title: "Warum Stress deinen Fokus blockiert",
    description: "Kurz erklärt, warum dein Kopf unter Druck schneller springt.",
    duration: "3 Min lesen",
    competence: "Resilienz",
    body: "Stress macht deinen Körper bereit zu handeln. Das kann kurzfristig helfen, aber es bindet Aufmerksamkeit. Kleine Pausen, bewusstes Atmen und ein klarer nächster Schritt geben deinem Kopf wieder Orientierung."
  },
  {
    id: "exam-pressure",
    title: "Was bei Prüfungsdruck im Kopf passiert",
    description: "Wie Druck entsteht und warum Sortieren oft entlastet.",
    duration: "4 Min lesen",
    competence: "Lernen",
    body: "Prüfungsdruck fühlt sich oft groß an, weil viele offene Fragen gleichzeitig im Kopf sind. Wenn du konkret notierst, was geprüft wird und womit du beginnst, wird aus Druck wieder eine handhabbare Aufgabe."
  },
  {
    id: "sleep-learning",
    title: "Wie Schlaf und Lernen zusammenhängen",
    description: "Warum Erholung kein Umweg, sondern Teil des Lernens ist.",
    duration: "3 Min lesen",
    competence: "Gesundheit",
    body: "Schlaf hilft dem Gehirn, Informationen zu ordnen. Wenn du abends gedanklich nicht abschalten kannst, kann ein kurzer Abschluss des Tages helfen: offene Gedanken notieren, den nächsten Schritt parken, Körper wahrnehmen."
  },
  {
    id: "small-steps",
    title: "Warum kleine Schritte bei Überforderung helfen",
    description: "Ein kurzer Blick darauf, warum weniger oft wirksamer ist.",
    duration: "3 Min lesen",
    competence: "Selbstorganisation",
    body: "Überforderung entsteht oft, wenn alles gleichzeitig wichtig wirkt. Ein kleiner Schritt nimmt nicht alles weg, aber er gibt Richtung. Das reicht häufig, um wieder ins Handeln zu kommen."
  }
];

const courses = [
  {
    id: "exam-calm",
    title: "Ruhiger durch Prüfungsphasen",
    description: "Ein kurzer Kurs, um Druck zu sortieren und Lernblöcke klarer zu planen.",
    duration: "7 Tage",
    competence: "Lernen",
    relatedActionId: "exam",
    modules: ["Druck verstehen", "Lernstoff sortieren", "Realistisch planen"]
  },
  {
    id: "sleep-seven",
    title: "Besser schlafen in 7 Tagen",
    description: "Kleine Routinen, die beim Abschalten am Abend unterstützen.",
    duration: "7 Tage",
    competence: "Gesundheit",
    relatedActionId: "sleep",
    modules: ["Abend abschließen", "Körper beruhigen", "Rhythmus stabilisieren"]
  },
  {
    id: "self-organization",
    title: "Selbstorganisation im Alltag",
    description: "Mehr Klarheit für Aufgaben, Termine und den nächsten kleinen Schritt.",
    duration: "3 Module",
    competence: "Selbstorganisation",
    relatedActionId: "focus",
    modules: ["Aufgaben sichtbar machen", "Prioritäten setzen", "Start leichter machen"]
  },
  {
    id: "stress-handle",
    title: "Mit Stress umgehen",
    description: "Ruhige Strategien, um Belastung früher zu bemerken und zu regulieren.",
    duration: "3 Module",
    competence: "Resilienz",
    relatedActionId: "stress",
    modules: ["Stresssignale erkennen", "Kurz regulieren", "Unterstützung nutzen"]
  }
];

const storageKey = "fivewaysPrototypeProgress";
const filters = ["Alle", "Stress", "Schlaf", "Lernen", "Fokus", "Beziehungen"];
const discoverTabs = ["Übungen", "Wissen", "Kurse"];

let selectedMood = null;
let currentRecommendation = null;
let currentView = "today";
let activeFilter = "Alle";
let activeDiscoverTab = "Übungen";
let returnContext = "today";

let completedSteps = 0;
let weeklySteps = 0;
let progressByCompetence = Object.fromEntries(competencies.map((competence) => [competence, 0]));

const views = document.querySelectorAll(".view");
const navItems = document.querySelectorAll(".nav-item");
const needGrid = document.querySelector("#need-grid");
const recommendationCard = document.querySelector("#recommendation-card");
const filterRow = document.querySelector("#filter-row");
const actionList = document.querySelector("#action-list");
const progressList = document.querySelector("#progress-list");
const exerciseScreen = document.querySelector("#exercise-screen");
const discoverScreen = document.querySelector("#discover-screen");
const detailScreen = document.querySelector("#detail-screen");
const crisisScreen = document.querySelector("#crisis-screen");

function loadProgress() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    completedSteps = Number(parsed.completedStepsToday) || 0;
    weeklySteps = Number(parsed.weeklySteps) || 0;
    progressByCompetence = {
      ...progressByCompetence,
      ...(parsed.progressByCompetence || {})
    };
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveProgress() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      completedStepsToday: completedSteps,
      weeklySteps,
      progressByCompetence
    })
  );
}

function pluralStep(count) {
  return count === 1 ? "kleiner Schritt" : "kleine Schritte";
}

function incrementProgress(competence) {
  completedSteps += 1;
  weeklySteps += 1;
  progressByCompetence[competence] = (progressByCompetence[competence] || 0) + 1;
  saveProgress();
  renderProgress();
}

function closeOverlays() {
  [exerciseScreen, discoverScreen, detailScreen, crisisScreen].forEach((screen) => {
    screen.classList.add("hidden");
    screen.classList.remove("active");
    screen.innerHTML = "";
  });
}

function renderNeeds() {
  needGrid.innerHTML = actions
    .map(
      (action) => `
        <button class="need-chip ${selectedMood === action.id ? "active" : ""}" type="button" data-need="${action.id}">
          <span class="need-icon" aria-hidden="true">${action.icon}</span>
          <span class="need-copy">
            <strong>${action.needLabel}</strong>
            <span class="need-hint">${action.hint}</span>
          </span>
        </button>
      `
    )
    .join("");
}

function renderRecommendation() {
  if (!currentRecommendation) {
    recommendationCard.classList.add("hidden");
    recommendationCard.innerHTML = "";
    return;
  }

  recommendationCard.classList.remove("hidden");
  recommendationCard.innerHTML = `
    <span class="eyebrow">Empfohlen für jetzt</span>
    <p class="choice-line">${currentRecommendation.recommendationIntro}</p>
    <h2>${currentRecommendation.title}</h2>
    <p class="card-text">${currentRecommendation.description}</p>
    <div class="meta-row">
      <span class="meta-pill">${currentRecommendation.duration}</span>
      <span class="meta-pill">Im Hintergrund: ${currentRecommendation.competence}</span>
    </div>
    <button class="primary-button" type="button" data-start-action="${currentRecommendation.id}">Jetzt starten</button>
  `;
}

function renderFilters() {
  filterRow.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-chip ${activeFilter === filter ? "active" : ""}" type="button" data-filter="${filter}">
          ${filter}
        </button>
      `
    )
    .join("");
}

function renderActionList() {
  const quickOrder = ["stress", "overwhelmed", "focus", "sleep", "exam", "alone"];
  const orderedActions = quickOrder.map((id) => actions.find((action) => action.id === id)).filter(Boolean);
  const visibleActions = activeFilter === "Alle" ? orderedActions : orderedActions.filter((action) => action.filter === activeFilter);
  actionList.innerHTML = visibleActions
    .map(
      (action) => `
        <article class="action-card">
          <span class="eyebrow">Übung</span>
          <h3>${action.title}</h3>
          <p class="card-text">${action.description}</p>
          <div class="meta-row">
            <span class="meta-pill">${action.duration}</span>
            <span class="meta-pill">Im Hintergrund: ${action.competence}</span>
          </div>
          <button class="card-button" type="button" data-open-action="${action.id}">Starten</button>
        </article>
      `
    )
    .join("");
}

function renderProgress() {
  document.querySelector("#today-count").textContent = completedSteps;
  document.querySelector("#week-count").textContent = weeklySteps;
  document.querySelector("#today-label").textContent = pluralStep(completedSteps);
  document.querySelector("#week-label").textContent = pluralStep(weeklySteps);

  progressList.innerHTML = competencies
    .map((competence) => {
      const value = progressByCompetence[competence] || 0;
      const percent = Math.min(value * 18, 100);
      return `
        <article class="progress-panel">
          <div class="progress-title-row">
            <span>${competence}</span>
            <span>${value} ${pluralStep(value)}</span>
          </div>
          <div class="progress-track" aria-label="${competence}: ${value} ${pluralStep(value)}">
            <div class="progress-fill" style="width: ${percent}%"></div>
          </div>
        </article>
      `;
    })
    .join("");
}

function switchTab(tab) {
  closeOverlays();
  currentView = tab;
  views.forEach((view) => view.classList.toggle("active", view.dataset.view === tab));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.tab === tab));
}

function openExercise(actionId, origin = currentView) {
  const action = actions.find((item) => item.id === actionId);
  if (!action) return;

  returnContext = origin;
  exerciseScreen.innerHTML = `
    <header class="exercise-header">
      <button class="back-button" type="button" data-close-overlay aria-label="Zurück">‹</button>
      <span class="meta-pill">${action.duration}</span>
    </header>
    <article class="exercise-card">
      <span class="eyebrow">Übung</span>
      <h1>${action.title}</h1>
      <p class="card-text">${action.description}</p>
      <div class="exercise-steps">
        ${action.steps
          .map(
            (step, index) => `
              <div class="exercise-step">
                <span class="step-number">${index + 1}</span>
                <p>${step}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <p class="background-note">Im Hintergrund gestärkt: ${action.competence}</p>
      <button class="primary-button" type="button" data-complete-action="${action.id}">Übung abschließen</button>
    </article>
  `;

  exerciseScreen.classList.remove("hidden");
  exerciseScreen.classList.add("active");
}

function completeExercise(actionId) {
  const action = actions.find((item) => item.id === actionId);
  if (!action) return;

  incrementProgress(action.competence);
  exerciseScreen.innerHTML = `
    <article class="completion-card">
      <span class="eyebrow">Abgeschlossen</span>
      <h2>Du hast dir ein paar Minuten für dich genommen.</h2>
      <p class="card-text">Im Hintergrund stärkst du: <strong>${action.competence}</strong></p>
      <button class="primary-button" type="button" data-finish-today>Zurück zu Heute</button>
    </article>
  `;
}

function renderDiscover() {
  const tabButtons = discoverTabs
    .map(
      (tab) => `
        <button class="filter-chip ${activeDiscoverTab === tab ? "active" : ""}" type="button" data-discover-tab="${tab}">
          ${tab}
        </button>
      `
    )
    .join("");

  discoverScreen.innerHTML = `
    <header class="exercise-header">
      <button class="back-button" type="button" data-close-overlay aria-label="Zurück">‹</button>
      <span class="meta-pill">Für später</span>
    </header>
    <div class="intro compact">
      <h1>Entdecken</h1>
      <p class="subline">Hier findest du Übungen, Wissen und Kurse, wenn du mehr Zeit hast.</p>
    </div>
    <div class="filter-row">${tabButtons}</div>
    <div class="discover-list">${renderDiscoverList()}</div>
  `;
}

function renderDiscoverList() {
  if (activeDiscoverTab === "Übungen") {
    const exerciseIds = ["stress", "overwhelmed", "focus", "sleep", "alone"];
    return exerciseIds
      .map((id) => actions.find((action) => action.id === id))
      .filter(Boolean)
      .map((action) => discoverCard("Übung", action.title, action.description, action.duration, action.competence, `data-open-action="${action.id}"`))
      .join("");
  }

  if (activeDiscoverTab === "Wissen") {
    return knowledgeItems
      .map((item) => discoverCard("Wissen", item.title, item.description, item.duration, item.competence, `data-open-knowledge="${item.id}"`))
      .join("");
  }

  return courses
    .map((course) => discoverCard("Kurs", course.title, course.description, course.duration, course.competence, `data-open-course="${course.id}"`))
    .join("");
}

function discoverCard(type, title, description, duration, competence, actionAttribute) {
  return `
    <article class="action-card discover-card">
      <span class="eyebrow">${type}</span>
      <h3>${title}</h3>
      <p class="card-text">${description}</p>
      <div class="meta-row">
        <span class="meta-pill">${duration}</span>
        <span class="meta-pill">Im Hintergrund: ${competence}</span>
      </div>
      <button class="card-button" type="button" ${actionAttribute}>Öffnen</button>
    </article>
  `;
}

function openDiscover() {
  activeDiscoverTab = "Übungen";
  renderDiscover();
  discoverScreen.classList.remove("hidden");
  discoverScreen.classList.add("active");
}

function openKnowledge(id) {
  const item = knowledgeItems.find((entry) => entry.id === id);
  if (!item) return;

  detailScreen.innerHTML = `
    <header class="exercise-header">
      <button class="back-button" type="button" data-back-discover aria-label="Zurück">‹</button>
      <span class="meta-pill">${item.duration}</span>
    </header>
    <article class="exercise-card">
      <span class="eyebrow">Wissen</span>
      <h1>${item.title}</h1>
      <p class="card-text">${item.body}</p>
      <p class="background-note">Im Hintergrund: ${item.competence}</p>
      <button class="primary-button" type="button" data-understood="${item.id}">Verstanden</button>
    </article>
  `;
  detailScreen.classList.remove("hidden");
  detailScreen.classList.add("active");
}

function completeKnowledge(id) {
  const item = knowledgeItems.find((entry) => entry.id === id);
  if (!item) return;

  incrementProgress(item.competence);
  detailScreen.innerHTML = `
    <article class="completion-card">
      <span class="eyebrow">Gelesen</span>
      <h2>Danke. Du hast einen kleinen Schritt vertieft.</h2>
      <p class="card-text">Im Hintergrund stärkst du: <strong>${item.competence}</strong></p>
      <button class="primary-button" type="button" data-back-discover>Zurück zu Entdecken</button>
      <button class="secondary-button" type="button" data-finish-today>Zurück zu Heute</button>
    </article>
  `;
}

function openCourse(id) {
  const course = courses.find((entry) => entry.id === id);
  if (!course) return;

  detailScreen.innerHTML = `
    <header class="exercise-header">
      <button class="back-button" type="button" data-back-discover aria-label="Zurück">‹</button>
      <span class="meta-pill">${course.duration}</span>
    </header>
    <article class="exercise-card">
      <span class="eyebrow">Für später, wenn du mehr Zeit hast</span>
      <h1>${course.title}</h1>
      <p class="card-text">${course.description}</p>
      <div class="course-modules">
        ${course.modules
          .map(
            (module, index) => `
              <div class="module-row">
                <span>${index + 1}</span>
                <strong>${module}</strong>
              </div>
            `
          )
          .join("")}
      </div>
      <p class="background-note">Im Hintergrund: ${course.competence}</p>
      <button class="primary-button" type="button" data-start-course="${course.id}">Kurs starten</button>
    </article>
  `;
  detailScreen.classList.remove("hidden");
  detailScreen.classList.add("active");
}

function confirmCourse(id) {
  const course = courses.find((entry) => entry.id === id);
  if (!course) return;

  detailScreen.innerHTML = `
    <article class="completion-card">
      <span class="eyebrow">Gespeichert</span>
      <h2>Der Kurs ist gespeichert. Für jetzt kannst du mit einem kleinen Schritt starten.</h2>
      <p class="card-text">${course.title} bleibt für später erreichbar.</p>
      <button class="primary-button" type="button" data-open-action="${course.relatedActionId}">Passende kurze Übung starten</button>
      <button class="secondary-button" type="button" data-back-discover>Zurück zu Entdecken</button>
    </article>
  `;
}

function openCrisis() {
  crisisScreen.innerHTML = `
    <article class="crisis-card">
      <span class="eyebrow">Hinweis</span>
      <h1>Akute Krise</h1>
      <p class="card-text">Wenn du dich akut gefährdet fühlst oder sofort Hilfe brauchst, wende dich bitte direkt an eine Notfallstelle oder eine Vertrauensperson.</p>
      <button class="primary-button crisis-call" type="button">Notruf 112</button>
      <button class="secondary-button" type="button" data-close-overlay>Zurück</button>
    </article>
  `;
  crisisScreen.classList.remove("hidden");
  crisisScreen.classList.add("active");
}

document.addEventListener("click", (event) => {
  const needButton = event.target.closest("[data-need]");
  const startActionButton = event.target.closest("[data-start-action]");
  const openActionButton = event.target.closest("[data-open-action]");
  const filterButton = event.target.closest("[data-filter]");
  const navButton = event.target.closest("[data-tab]");
  const discoverTabButton = event.target.closest("[data-discover-tab]");
  const openKnowledgeButton = event.target.closest("[data-open-knowledge]");
  const openCourseButton = event.target.closest("[data-open-course]");
  const understoodButton = event.target.closest("[data-understood]");
  const startCourseButton = event.target.closest("[data-start-course]");

  if (needButton) {
    selectedMood = needButton.dataset.need;
    currentRecommendation = actions.find((action) => action.id === selectedMood);
    renderNeeds();
    renderRecommendation();
    requestAnimationFrame(() => {
      recommendationCard.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  }

  if (startActionButton) openExercise(startActionButton.dataset.startAction, currentView);
  if (openActionButton) openExercise(openActionButton.dataset.openAction, discoverScreen.classList.contains("active") ? "discover" : currentView);

  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    renderFilters();
    renderActionList();
  }

  if (navButton) switchTab(navButton.dataset.tab);

  if (event.target.closest("[data-open-discover]")) openDiscover();

  if (discoverTabButton) {
    activeDiscoverTab = discoverTabButton.dataset.discoverTab;
    renderDiscover();
  }

  if (openKnowledgeButton) openKnowledge(openKnowledgeButton.dataset.openKnowledge);
  if (openCourseButton) openCourse(openCourseButton.dataset.openCourse);
  if (understoodButton) completeKnowledge(understoodButton.dataset.understood);
  if (startCourseButton) confirmCourse(startCourseButton.dataset.startCourse);

  const completeActionButton = event.target.closest("[data-complete-action]");
  if (completeActionButton) completeExercise(completeActionButton.dataset.completeAction);

  if (event.target.closest("[data-open-crisis]")) openCrisis();

  if (event.target.closest("[data-close-overlay]")) {
    if (event.target.closest("#exercise-screen") && returnContext === "discover") {
      exerciseScreen.classList.add("hidden");
      exerciseScreen.classList.remove("active");
    } else {
      closeOverlays();
    }
  }

  if (event.target.closest("[data-back-discover]")) {
    detailScreen.classList.add("hidden");
    detailScreen.classList.remove("active");
    detailScreen.innerHTML = "";
    renderDiscover();
    discoverScreen.classList.remove("hidden");
    discoverScreen.classList.add("active");
  }

  if (event.target.closest("[data-finish-today]")) switchTab("today");
});

loadProgress();
renderNeeds();
renderRecommendation();
renderFilters();
renderActionList();
renderProgress();
