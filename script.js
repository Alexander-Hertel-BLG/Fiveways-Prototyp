const developmentAreas = ["Resilienz", "Health", "Self", "Social", "Future Skills"];

const miniQuests = [
  {
    id: "breath-reset",
    type: "mini",
    icon: "∿",
    needId: "stress",
    needLabel: "Ich bin gestresst",
    selectedText: "gestresst",
    recommendationIntro: "Bei Stress empfehlen wir dir jetzt:",
    hint: "kurz runterkommen",
    category: "Stress",
    title: "3-Minuten Atem-Reset",
    description: "Eine kurze Übung, um dein Nervensystem zu beruhigen und wieder klarer zu werden.",
    duration: "3 Min",
    area: "Resilienz",
    steps: [
      "Setz dich bequem hin und lege beide Füße auf den Boden.",
      "Atme 4 Sekunden ein und 6 Sekunden aus.",
      "Wiederhole das ruhig für ein paar Atemzüge und frage dich danach: Was ist jetzt der nächste kleine Schritt?"
    ]
  },
  {
    id: "thought-sort",
    type: "mini",
    icon: "≡",
    needId: "overwhelmed",
    needLabel: "Ich bin überfordert",
    selectedText: "überfordert",
    recommendationIntro: "Bei Überforderung empfehlen wir dir jetzt:",
    hint: "Gedanken ordnen",
    category: "Fokus",
    title: "Gedanken sortieren",
    description: "Bringe kurz aufs Papier, was gerade im Kopf ist, und wähle danach nur den nächsten kleinen Schritt.",
    duration: "4 Min",
    area: "Self",
    steps: [
      "Notiere alles, was dich gerade beschäftigt.",
      "Markiere nur eine Sache, die als Nächstes wichtig ist.",
      "Formuliere daraus einen kleinen Schritt, den du heute schaffen kannst."
    ]
  },
  {
    id: "focus-reset",
    type: "mini",
    icon: "◎",
    needId: "focus",
    needLabel: "Ich brauche Fokus",
    selectedText: "Fokusbedarf",
    recommendationIntro: "Für mehr Fokus empfehlen wir dir jetzt:",
    hint: "Ablenkung reduzieren",
    category: "Fokus",
    title: "Fokus-Reset",
    description: "Eine kurze Übung, um Ablenkung zu reduzieren und mit einer klaren Aufgabe zu starten.",
    duration: "2 Min",
    area: "Self",
    steps: [
      "Lege alles weg, was du jetzt nicht brauchst.",
      "Formuliere eine einzige Aufgabe für die nächsten 15 Minuten.",
      "Starte mit dem kleinsten sichtbaren Schritt."
    ]
  },
  {
    id: "evening-calm",
    type: "mini",
    icon: "◐",
    needId: "sleep",
    needLabel: "Ich kann nicht schlafen",
    selectedText: "Schlafprobleme",
    recommendationIntro: "Bei Schlafproblemen empfehlen wir dir jetzt:",
    hint: "abends runterkommen",
    category: "Schlaf",
    title: "Abendlicher Ruhemodus",
    description: "Eine kurze Routine, um Kopfkino zu reduzieren und den Tag mental abzuschließen.",
    duration: "5 Min",
    area: "Health",
    steps: [
      "Schreib drei Gedanken auf, die du für heute ablegen möchtest.",
      "Notiere einen Satz: Für heute ist genug.",
      "Atme langsam aus und richte deine Aufmerksamkeit auf deinen Körper."
    ]
  },
  {
    id: "exam-release",
    type: "mini",
    icon: "⌁",
    needId: "exam",
    needLabel: "Ich habe Prüfungsdruck",
    selectedText: "Prüfungsdruck",
    recommendationIntro: "Bei Prüfungsdruck empfehlen wir dir jetzt:",
    hint: "Lernen sortieren",
    category: "Lernen",
    title: "Prüfungsdruck entladen",
    description: "Sortiere, was wirklich prüfungsrelevant ist, und plane deinen nächsten Lernblock.",
    duration: "5 Min",
    area: "Future Skills",
    steps: [
      "Schreibe auf, was konkret geprüft wird.",
      "Wähle ein Thema, das als Nächstes den größten Effekt hat.",
      "Plane einen Lernblock von 25 Minuten mit genau einer Aufgabe."
    ]
  },
  {
    id: "contact-impulse",
    type: "mini",
    icon: "＋",
    needId: "alone",
    needLabel: "Ich fühle mich allein",
    selectedText: "das Gefühl von Alleinsein",
    recommendationIntro: "Wenn du dich allein fühlst, empfehlen wir dir jetzt:",
    hint: "Kontakt leichter machen",
    category: "Social",
    title: "Kleiner Kontaktimpuls",
    description: "Wähle eine einfache Kontaktaktion, die heute realistisch ist.",
    duration: "3 Min",
    area: "Social",
    steps: [
      "Denke an eine Person, bei der Kontakt niedrigschwellig möglich ist.",
      "Schreibe eine kurze Nachricht, ohne sie perfekt machen zu wollen.",
      "Sende sie ab oder speichere sie als ersten Schritt."
    ]
  }
];

const guides = [
  {
    id: "exam-calm",
    type: "guide",
    title: "Ruhiger durch Prüfungsphasen",
    description: "Bearbeite Druck, Lernstoff und Pausen Schritt für Schritt.",
    scope: "4 Module",
    area: "Future Skills",
    displayArea: "Future Skills / Resilienz",
    modules: ["Druck einordnen", "Lernstoff sortieren", "Blöcke planen", "Pausen verankern"]
  },
  {
    id: "sleep-seven",
    type: "guide",
    title: "Besser schlafen in 7 Tagen",
    description: "Kleine Abendroutinen, die Abschalten und Erholung leichter machen.",
    scope: "7 Tage",
    area: "Health",
    modules: ["Abend abschließen", "Körper beruhigen", "Gedanken parken", "Rhythmus finden"]
  },
  {
    id: "daily-organization",
    type: "guide",
    title: "Selbstorganisation im Alltag",
    description: "Mehr Klarheit für Aufgaben, Termine und den nächsten Schritt.",
    scope: "4 Module",
    area: "Self",
    modules: ["Aufgaben sichtbar machen", "Prioritäten setzen", "Start leichter machen", "Routinen prüfen"]
  },
  {
    id: "stress-handle",
    type: "guide",
    title: "Mit Stress umgehen",
    description: "Lerne ruhige Strategien, um Belastung früher zu bemerken und zu regulieren.",
    scope: "5 Module",
    area: "Resilienz",
    modules: ["Stresssignale erkennen", "Kurz regulieren", "Grenzen wahrnehmen", "Erholung einplanen", "Unterstützung nutzen"]
  },
  {
    id: "healthy-relationships",
    type: "guide",
    title: "Gesunde Beziehungen stärken",
    description: "Übe klare Kommunikation, Nähe und Grenzen in deinem Tempo.",
    scope: "5 Module",
    area: "Social",
    modules: ["Kontakt wahrnehmen", "Bedürfnisse benennen", "Grenzen achten", "Konflikte sortieren", "Verbindung pflegen"]
  }
];

const contentItems = [...miniQuests, ...guides];
const storageKey = "fivewaysPrototypeContentState";
const contentTabs = [
  { id: "continue", label: "Fortsetzen" },
  { id: "mini", label: "Mini-Quests" },
  { id: "guides", label: "Guides" }
];
const miniFilters = ["Alle", "Stress", "Schlaf", "Lernen", "Fokus", "Social"];
const guideFilters = ["Alle", "Health", "Resilienz", "Self", "Social", "Future Skills"];
const continueFilters = ["Alle", "Mini-Quests", "Guides"];
const profileAreas = [
  { name: "Health", steps: 2 },
  { name: "Resilienz", steps: 3 },
  { name: "Self", steps: 2 },
  { name: "Social", steps: 1 },
  { name: "Future Skills", steps: 2 }
];
const profileBadges = [
  {
    id: "calm-found",
    title: "Ruhe gefunden",
    area: "Resilienz",
    icon: "◐",
    status: "achieved",
    description: "Du hast dieses Badge erhalten, weil du mehrere kurze Übungen zur Stressregulation abgeschlossen hast.",
    activities: ["Atem-Reset", "Gedanken sortieren", "Fokus-Reset"],
    ctaLabel: "Weitere passende Übungen anzeigen"
  },
  {
    id: "evening-started",
    title: "Abendroutine gestartet",
    area: "Health",
    icon: "☾",
    status: "achieved",
    description: "Du hast dieses Badge erhalten, weil du eine Abendübung abgeschlossen hast.",
    activities: ["Abendlicher Ruhemodus"],
    ctaLabel: "Weitere passende Übungen anzeigen"
  },
  {
    id: "thoughts-sorted",
    title: "Gedanken sortiert",
    area: "Self",
    icon: "≡",
    status: "achieved",
    description: "Du hast dieses Badge erhalten, weil du eine Reflexionsübung abgeschlossen hast.",
    activities: ["Gedanken sortieren"],
    ctaLabel: "Weitere passende Übungen anzeigen"
  },
  {
    id: "contact-step",
    title: "Kontaktimpuls gesetzt",
    area: "Social",
    icon: "＋",
    status: "achieved",
    description: "Du hast dieses Badge erhalten, weil du einen kleinen sozialen Schritt vorbereitet hast.",
    activities: ["Kleiner Kontaktimpuls"],
    ctaLabel: "Weitere passende Übungen anzeigen"
  },
  {
    id: "exam-pressure",
    title: "Prüfungsdruck angegangen",
    area: "Future Skills / Self",
    icon: "✓",
    status: "achieved",
    description: "Du hast dieses Badge erhalten, weil du eine Übung zu Prüfungsdruck oder Lernen abgeschlossen hast.",
    activities: ["Prüfungsdruck entladen"],
    ctaLabel: "Weitere passende Übungen anzeigen"
  },
  {
    id: "five-small-exercises",
    title: "5 kleine Übungen",
    area: "Allgemein",
    icon: "·",
    status: "upcoming",
    description: "Dieses Badge erhältst du, wenn du fünf kurze Übungen abschließt.",
    hint: "Noch 2 Übungen",
    ctaLabel: "Passende Übung starten"
  },
  {
    id: "first-guide",
    title: "Erster Guide abgeschlossen",
    area: "Allgemein",
    icon: "·",
    status: "upcoming",
    description: "Dieses Badge erhältst du, wenn du deinen ersten Guide abschließt.",
    hint: "Noch 1 Modul",
    ctaLabel: "Passende Übung starten"
  },
  {
    id: "kept-going",
    title: "Drangeblieben",
    area: "Allgemein",
    icon: "·",
    status: "upcoming",
    description: "Dieses Badge erhältst du, wenn du an mehreren Tagen kleine Schritte machst.",
    hint: "Noch 1 aktiver Tag",
    ctaLabel: "Passende Übung starten"
  }
];
const completedProfileItems = [
  { title: "3-Minuten Atem-Reset", type: "Mini-Quest", status: "abgeschlossen" },
  { title: "Fokus-Reset", type: "Mini-Quest", status: "abgeschlossen" },
  { title: "Ruhiger durch Prüfungsphasen", type: "Guide", status: "Modul 1 abgeschlossen" }
];
const demoItems = {
  "thought-sort": {
    status: "Angefangen",
    progress: 2,
    lastUsed: "heute",
    lastUsedRank: 4
  },
  "evening-calm": {
    status: "Angefangen",
    progress: 1,
    lastUsed: "gestern",
    lastUsedRank: 3
  },
  "exam-calm": {
    status: "Angefangen",
    progress: 0,
    lastUsed: "vor 3 Tagen",
    lastUsedRank: 2
  },
  "stress-handle": {
    status: "Angefangen",
    progress: 1,
    lastUsed: "vor 5 Tagen",
    lastUsedRank: 1
  }
};

let selectedNeed = null;
let currentRecommendation = null;
let currentView = "home";
let activeContentTab = "continue";
let activeFilter = "Alle";
let returnContext = "home";
let state = createInitialState();

const views = document.querySelectorAll(".view");
const navItems = document.querySelectorAll(".nav-item");
const needGrid = document.querySelector("#need-grid");
const recommendationCard = document.querySelector("#recommendation-card");
const homeContinueList = document.querySelector("#home-continue-list");
const contentTabsRow = document.querySelector("#content-tabs");
const contentSubline = document.querySelector("#content-subline");
const filterRow = document.querySelector("#filter-row");
const contentList = document.querySelector("#content-list");
const progressList = document.querySelector("#progress-list");
const exerciseScreen = document.querySelector("#exercise-screen");
const detailScreen = document.querySelector("#detail-screen");
const crisisScreen = document.querySelector("#crisis-screen");

function createInitialState() {
  return {
    demoSeed: true,
    items: { ...demoItems },
    stepsToday: 0,
    stepsWeek: 0,
    areaSteps: Object.fromEntries(developmentAreas.map((area) => [area, 0]))
  };
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    state = {
      ...state,
      ...parsed,
      items: parsed.demoSeed ? parsed.items || {} : { ...demoItems, ...(parsed.items || {}) },
      demoSeed: true,
      areaSteps: {
        ...state.areaSteps,
        ...(parsed.areaSteps || parsed.progressByCompetence || {})
      }
    };
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function getItem(id) {
  return contentItems.find((item) => item.id === id);
}

function getItemState(id) {
  const item = getItem(id);
  const total = item?.type === "mini" ? item.steps.length : item?.modules.length || 1;
  return {
    status: "Neu",
    progress: 0,
    lastUsed: "",
    ...(state.items[id] || {}),
    total
  };
}

function setItemState(id, updates) {
  state.items[id] = {
    ...getItemState(id),
    ...updates,
    lastUsed: updates.lastUsed || "heute",
    lastUsedRank: updates.lastUsedRank || Date.now()
  };
  saveState();
  renderAll();
}

function markStarted(id) {
  const item = getItem(id);
  const itemState = getItemState(id);
  if (!item || itemState.status !== "Neu") return;

  setItemState(id, {
    status: "Angefangen",
    progress: item.type === "mini" ? 1 : 0
  });
}

function completeContent(id) {
  const item = getItem(id);
  if (!item) return;

  const total = item.type === "mini" ? item.steps.length : item.modules.length;
  const itemState = getItemState(id);
  const wasCompleted = itemState.status === "Abgeschlossen";

  setItemState(id, {
    status: "Abgeschlossen",
    progress: total
  });

  if (!wasCompleted) {
    state.stepsToday += 1;
    state.stepsWeek += 1;
    state.areaSteps[item.area] = (state.areaSteps[item.area] || 0) + 1;
    saveState();
  }
  renderAll();
}

function advanceGuide(id) {
  const guide = guides.find((item) => item.id === id);
  if (!guide) return;

  markStarted(id);
  const itemState = getItemState(id);
  const wasCompleted = itemState.status === "Abgeschlossen";
  const nextProgress = Math.min(itemState.progress + 1, guide.modules.length);
  setItemState(id, {
    status: nextProgress >= guide.modules.length ? "Abgeschlossen" : "Angefangen",
    progress: nextProgress
  });

  if (nextProgress >= guide.modules.length && !wasCompleted) {
    state.stepsToday += 1;
    state.stepsWeek += 1;
    state.areaSteps[guide.area] = (state.areaSteps[guide.area] || 0) + 1;
    saveState();
  }
  renderAll();
}

function pluralStep(count) {
  return count === 1 ? "kleiner Schritt" : "kleine Schritte";
}

function typeLabel(item) {
  return item.type === "mini" ? "Mini-Quest" : "Guide";
}

function progressLabel(item) {
  const itemState = getItemState(item.id);
  if (item.type === "mini") {
    const progress = itemState.status === "Neu" ? 0 : Math.max(1, itemState.progress);
    return itemState.status === "Abgeschlossen" ? `${item.steps.length} von ${item.steps.length} Schritten` : `${progress} von ${item.steps.length} Schritten`;
  }

  const currentModule = itemState.status === "Neu" ? 1 : Math.min(itemState.progress + 1, item.modules.length);
  return itemState.status === "Abgeschlossen" ? `${item.modules.length} von ${item.modules.length} Modulen` : `Modul ${currentModule} von ${item.modules.length}`;
}

function compactProgressLabel(item) {
  const itemState = getItemState(item.id);
  if (item.type === "mini") {
    return `${itemState.progress}/${item.steps.length} Schritte`;
  }

  const moduleNumber = Math.min(itemState.progress + 1, item.modules.length);
  return `Modul ${moduleNumber}/${item.modules.length}`;
}

function progressRatio(item) {
  const itemState = getItemState(item.id);
  if (item.type === "mini") return Math.min(itemState.progress / item.steps.length, 1);
  return Math.min((itemState.progress + 1) / item.modules.length, 1);
}

function lastUsedLabel(id) {
  const lastUsed = getItemState(id).lastUsed || "heute";
  return lastUsed.startsWith("zuletzt") ? lastUsed : `zuletzt ${lastUsed}`;
}

function startedItems() {
  return contentItems.filter((item) => getItemState(item.id).status === "Angefangen");
}

function areaLabel(item) {
  return item.displayArea || item.area;
}

function sortForContinue(items, preferMiniOnTie = false) {
  return [...items].sort((a, b) => {
    const stateA = getItemState(a.id);
    const stateB = getItemState(b.id);
    const rankDiff = (stateB.lastUsedRank || 0) - (stateA.lastUsedRank || 0);
    if (rankDiff !== 0) return rankDiff;

    if (preferMiniOnTie && a.type !== b.type) return a.type === "mini" ? -1 : 1;

    const completionA = stateA.progress / stateA.total;
    const completionB = stateB.progress / stateB.total;
    return completionB - completionA;
  });
}

function closeOverlays() {
  [exerciseScreen, detailScreen, crisisScreen].forEach((screen) => {
    screen.classList.add("hidden");
    screen.classList.remove("active");
    screen.innerHTML = "";
  });
}

function renderNeeds() {
  needGrid.innerHTML = miniQuests
    .map(
      (quest) => `
        <button class="need-chip ${selectedNeed === quest.needId ? "active" : ""}" type="button" data-need="${quest.needId}">
          <span class="need-icon" aria-hidden="true">${quest.icon}</span>
          <span class="need-copy">
            <strong>${quest.needLabel}</strong>
            <span class="need-hint">${quest.hint}</span>
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

  const itemState = getItemState(currentRecommendation.id);
  recommendationCard.classList.remove("hidden");
  recommendationCard.innerHTML = `
    <span class="eyebrow">Empfohlen für jetzt · Mini-Quest</span>
    <p class="choice-line">${currentRecommendation.recommendationIntro}</p>
    <h2>${currentRecommendation.title}</h2>
    <p class="card-text">${currentRecommendation.description}</p>
    <div class="meta-row">
      <span class="meta-pill">${currentRecommendation.duration}</span>
      <span class="meta-pill">Im Hintergrund: ${currentRecommendation.area}</span>
      <span class="meta-pill">${itemState.status}</span>
    </div>
    <button class="primary-button" type="button" data-open-mini="${currentRecommendation.id}">Jetzt starten</button>
  `;
}

function renderHomeContinue() {
  const items = sortForContinue(startedItems()).slice(0, 2);

  if (!items.length) {
    homeContinueList.innerHTML = `
      <article class="empty-card">
        <p>Noch nichts angefangen. Starte mit einer kurzen Mini-Quest.</p>
      </article>
    `;
    return;
  }

  homeContinueList.innerHTML = items.map(homeContinueRow).join("");
}

function renderContentTabs() {
  contentTabsRow.innerHTML = contentTabs
    .map(
      (tab) => `
        <button class="filter-chip ${activeContentTab === tab.id ? "active" : ""}" type="button" data-content-tab="${tab.id}">
          ${tab.label}
        </button>
      `
    )
    .join("");
}

function renderFilters() {
  const filters = activeContentTab === "continue" ? continueFilters : activeContentTab === "mini" ? miniFilters : guideFilters;
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

function renderContentList() {
  if (activeContentTab === "continue") {
    contentSubline.textContent = "Hier kannst du weitermachen, wenn es gerade passt.";
    let items = startedItems();
    if (activeFilter === "Mini-Quests") items = items.filter((item) => item.type === "mini");
    if (activeFilter === "Guides") items = items.filter((item) => item.type === "guide");
    items = sortForContinue(items, true);
    contentList.innerHTML = items.length
      ? items.map((item) => continueCard(item)).join("")
      : `<article class="empty-card"><p>Noch nichts angefangen. Starte mit einer kurzen Mini-Quest.</p></article>`;
    return;
  }

  if (activeContentTab === "mini") {
    contentSubline.textContent = "Kurze Übungen, wenn du direkt etwas tun möchtest.";
    const items = activeFilter === "Alle" ? miniQuests : miniQuests.filter((item) => item.category === activeFilter);
    contentList.innerHTML = items.map(miniQuestCard).join("");
    return;
  }

  contentSubline.textContent = "Längere Übungen, wenn du ein Thema Schritt für Schritt bearbeiten möchtest.";
  const items = activeFilter === "Alle" ? guides : guides.filter((item) => item.area === activeFilter);
  contentList.innerHTML = items.map(guideCard).join("");
}

function continueCard(item, compact = false) {
  return `
    <article class="${compact ? "continue-card compact" : "action-card"}">
      <span class="eyebrow">${typeLabel(item)}</span>
      <h3>${item.title}</h3>
      <div class="meta-row">
        <span class="meta-pill">Im Hintergrund: ${areaLabel(item)}</span>
        <span class="meta-pill">${progressLabel(item)}</span>
        ${compact ? "" : `<span class="meta-pill">${lastUsedLabel(item.id)}</span>`}
      </div>
      <button class="card-button" type="button" ${item.type === "mini" ? `data-open-mini="${item.id}"` : `data-open-guide="${item.id}"`}>Fortsetzen</button>
    </article>
  `;
}

function homeContinueRow(item) {
  const width = Math.round(progressRatio(item) * 100);
  return `
    <article class="continue-row">
      <div class="continue-row-main">
        <h3>${item.title}</h3>
        <p>${typeLabel(item)} · ${compactProgressLabel(item)}</p>
        <div class="mini-progress" aria-label="${progressLabel(item)}">
          <span style="width: ${width}%"></span>
        </div>
      </div>
      <button class="inline-continue" type="button" ${item.type === "mini" ? `data-open-mini="${item.id}"` : `data-open-guide="${item.id}"`}>Fortsetzen</button>
    </article>
  `;
}

function miniQuestCard(item) {
  const itemState = getItemState(item.id);
  const buttonLabel = itemState.status === "Neu" ? "Starten" : itemState.status === "Angefangen" ? "Fortsetzen" : "Ansehen";
  return `
    <article class="action-card">
      <span class="eyebrow">Mini-Quest</span>
      <h3>${item.title}</h3>
      <p class="card-text">${item.description}</p>
      <div class="meta-row">
        <span class="meta-pill">${item.duration}</span>
        <span class="meta-pill">Im Hintergrund: ${areaLabel(item)}</span>
        <span class="meta-pill">${itemState.status}</span>
      </div>
      <button class="card-button" type="button" data-open-mini="${item.id}">${buttonLabel}</button>
    </article>
  `;
}

function guideCard(item) {
  const itemState = getItemState(item.id);
  const buttonLabel = itemState.status === "Neu" ? "Starten" : itemState.status === "Angefangen" ? "Fortsetzen" : "Ansehen";
  return `
    <article class="action-card">
      <span class="eyebrow">Guide</span>
      <h3>${item.title}</h3>
      <p class="card-text">${item.description}</p>
      <div class="meta-row">
        <span class="meta-pill">${item.scope}</span>
        <span class="meta-pill">Im Hintergrund: ${areaLabel(item)}</span>
        <span class="meta-pill">${itemState.status}</span>
      </div>
      <button class="card-button" type="button" data-open-guide="${item.id}">${buttonLabel}</button>
    </article>
  `;
}

function renderProgress() {
  document.querySelector("#today-count").textContent = "1";
  document.querySelector("#week-count").textContent = "4";
  document.querySelector("#today-label").textContent = "kleiner Schritt";
  document.querySelector("#week-label").textContent = "kleine Schritte";

  progressList.innerHTML = `
    <p class="profile-hint">Kleine Schritte zählen, auch wenn du nicht jeden Tag aktiv bist.</p>
    <section class="profile-section" aria-labelledby="areas-title">
      <h2 id="areas-title">Fiveways-Bereiche</h2>
      <div class="area-list">
        ${profileAreas
          .map(
            (area) => `
              <article class="area-row">
                <div>
                  <strong>${area.name}</strong>
                  <span>${area.steps} ${pluralStep(area.steps)}</span>
                </div>
                <div class="area-mark" aria-hidden="true">
                  ${[0, 1, 2, 3].map((dot) => `<span class="${dot < area.steps ? "active" : ""}"></span>`).join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="profile-section" aria-labelledby="badges-title">
      <h2 id="badges-title">Deine Badges & Meilensteine</h2>
      <p>Badges würdigen kleine Schritte.</p>
      <h3>Erreichte Badges</h3>
      <div class="badge-grid">
        ${profileBadges
          .filter((badge) => badge.status === "achieved")
          .map(badgeTile)
          .join("")}
      </div>
      <h3>Nächste mögliche Meilensteine</h3>
      <div class="badge-grid muted">
        ${profileBadges
          .filter((badge) => badge.status === "upcoming")
          .slice(0, 3)
          .map(badgeTile)
          .join("")}
      </div>
    </section>
    <section class="profile-section" aria-labelledby="completed-title">
      <div class="profile-heading-row">
        <div>
          <h2 id="completed-title">Abgeschlossen</h2>
          <p>Diese Inhalte hast du bereits beendet.</p>
        </div>
        <button class="text-link" type="button" data-open-help="mini">Alle anzeigen</button>
      </div>
      <div class="completed-list">
        ${completedProfileItems
          .map(
            (item) => `
              <article class="completed-row">
                <div>
                  <strong>${item.title}</strong>
                  <span>${item.type}</span>
                </div>
                <small>${item.status}</small>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="profile-section" aria-labelledby="settings-title">
      <h2 id="settings-title">Einstellungen</h2>
      <div class="settings-list">
        <button type="button">Benachrichtigungen</button>
        <button type="button">Datenschutz</button>
        <button type="button">Hilfe & Kontakt</button>
      </div>
    </section>
  `;
}

function badgeTile(badge) {
  return `
    <button class="profile-badge ${badge.status}" type="button" data-open-badge="${badge.id}">
      <span class="badge-symbol" aria-hidden="true">${badge.icon}</span>
      <strong>${badge.title}</strong>
      <small>${badge.area}</small>
      ${badge.hint ? `<em>${badge.hint}</em>` : ""}
    </button>
  `;
}

function completedMiniCount() {
  return miniQuests.filter((item) => getItemState(item.id).status === "Abgeschlossen").length;
}

function startedGuideCount() {
  return guides.filter((item) => getItemState(item.id).status !== "Neu").length;
}

function completedContentCount() {
  return contentItems.filter((item) => getItemState(item.id).status === "Abgeschlossen").length;
}

function switchTab(tab) {
  closeOverlays();
  currentView = tab;
  views.forEach((view) => view.classList.toggle("active", view.dataset.view === tab));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.tab === tab));
}

function openHelp(tab = "mini") {
  activeContentTab = tab;
  activeFilter = "Alle";
  switchTab("help");
  renderAll();
}

function openMiniQuest(id, origin = currentView) {
  const quest = miniQuests.find((item) => item.id === id);
  if (!quest) return;

  returnContext = origin;
  detailScreen.classList.add("hidden");
  detailScreen.classList.remove("active");
  detailScreen.innerHTML = "";
  markStarted(id);
  exerciseScreen.innerHTML = `
    <header class="exercise-header">
      <button class="back-button" type="button" data-close-overlay aria-label="Zurück">‹</button>
      <span class="meta-pill">${quest.duration}</span>
    </header>
    <article class="exercise-card">
      <span class="eyebrow">Mini-Quest</span>
      <h1>${quest.title}</h1>
      <p class="card-text">${quest.description}</p>
      <div class="exercise-steps">
        ${quest.steps
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
      <p class="background-note">Im Hintergrund gestärkt: ${quest.area}</p>
      <button class="primary-button" type="button" data-complete-mini="${quest.id}">Übung abschließen</button>
    </article>
  `;

  exerciseScreen.classList.remove("hidden");
  exerciseScreen.classList.add("active");
}

function completeMiniQuest(id) {
  const quest = miniQuests.find((item) => item.id === id);
  if (!quest) return;

  completeContent(id);
  exerciseScreen.innerHTML = `
    <article class="completion-card">
      <span class="eyebrow">Abgeschlossen</span>
      <h2>Du hast dir ein paar Minuten für dich genommen.</h2>
      <p class="card-text">Im Hintergrund stärkst du: <strong>${quest.area}</strong></p>
      <button class="primary-button" type="button" data-finish-home>Zurück zu Home</button>
      <button class="secondary-button" type="button" data-open-help="continue">Fortsetzen ansehen</button>
    </article>
  `;
}

function openGuide(id) {
  const guide = guides.find((item) => item.id === id);
  if (!guide) return;

  markStarted(id);
  const itemState = getItemState(id);
  const isCompleted = itemState.status === "Abgeschlossen";
  const buttonLabel = itemState.progress === 0 ? "Modul starten" : "Fortsetzen";
  detailScreen.innerHTML = `
    <header class="exercise-header">
      <button class="back-button" type="button" data-close-overlay aria-label="Zurück">‹</button>
      <span class="meta-pill">${progressLabel(guide)}</span>
    </header>
    <article class="exercise-card">
      <span class="eyebrow">Guide</span>
      <h1>${guide.title}</h1>
      <p class="card-text">${guide.description}</p>
      <div class="course-modules">
        ${guide.modules
          .map(
            (module, index) => `
              <div class="module-row ${index < itemState.progress ? "done" : ""}">
                <span>${index + 1}</span>
                <strong>${module}</strong>
              </div>
            `
          )
          .join("")}
      </div>
      <p class="background-note">Im Hintergrund: ${guide.area}</p>
      ${isCompleted ? `<button class="secondary-button" type="button" data-close-overlay>Zurück</button>` : `<button class="primary-button" type="button" data-start-module="${guide.id}">${buttonLabel}</button>`}
    </article>
  `;
  detailScreen.classList.remove("hidden");
  detailScreen.classList.add("active");
}

function openGuideModule(id) {
  const guide = guides.find((item) => item.id === id);
  if (!guide) return;

  const itemState = getItemState(id);
  const moduleIndex = Math.min(itemState.progress, guide.modules.length - 1);
  detailScreen.innerHTML = `
    <header class="exercise-header">
      <button class="back-button" type="button" data-open-guide="${guide.id}" aria-label="Zurück">‹</button>
      <span class="meta-pill">Modul ${moduleIndex + 1} von ${guide.modules.length}</span>
    </header>
    <article class="exercise-card">
      <span class="eyebrow">Guide</span>
      <h1>${guide.modules[moduleIndex]}</h1>
      <p class="card-text">${guide.description}</p>
      <div class="exercise-steps">
        <div class="exercise-step">
          <span class="step-number">1</span>
          <p>Nimm dir einen ruhigen Moment und lies die Leitfrage für dieses Modul.</p>
        </div>
        <div class="exercise-step">
          <span class="step-number">2</span>
          <p>Notiere, was gerade für dich relevant ist.</p>
        </div>
        <div class="exercise-step">
          <span class="step-number">3</span>
          <p>Wähle einen kleinen Schritt, den du in den nächsten Tagen ausprobieren möchtest.</p>
        </div>
      </div>
      <button class="primary-button" type="button" data-complete-module="${guide.id}">Modul abschließen</button>
    </article>
  `;
}

function completeGuideModule(id) {
  const guide = guides.find((item) => item.id === id);
  if (!guide) return;

  advanceGuide(id);
  const itemState = getItemState(id);
  detailScreen.innerHTML = `
    <article class="completion-card">
      <span class="eyebrow">${itemState.status === "Abgeschlossen" ? "Guide abgeschlossen" : "Modul abgeschlossen"}</span>
      <h2>${itemState.status === "Abgeschlossen" ? "Du hast das Thema Schritt für Schritt vertieft." : "Ein Modul ist geschafft. Du kannst später weitergehen."}</h2>
      <p class="card-text">${progressLabel(guide)}</p>
      <button class="primary-button" type="button" data-open-guide="${guide.id}">Zum Guide</button>
      <button class="secondary-button" type="button" data-open-help="continue">Fortsetzen ansehen</button>
    </article>
  `;
}

function openBadgeModal(id) {
  const badge = profileBadges.find((item) => item.id === id);
  if (!badge) return;

  const isAchieved = badge.status === "achieved";
  detailScreen.innerHTML = `
    <div class="sheet-backdrop" data-close-overlay></div>
    <article class="badge-sheet">
      <button class="sheet-close" type="button" data-close-overlay aria-label="Schließen">×</button>
      <span class="badge-detail-icon ${badge.status}" aria-hidden="true">${badge.icon}</span>
      <span class="eyebrow">${badge.area}</span>
      <h1>${badge.title}</h1>
      <p class="card-text">${badge.description}</p>
      ${
        isAchieved
          ? `
            <div class="activity-list">
              <strong>Aktivitäten</strong>
              <p>${badge.activities.join(", ")}</p>
            </div>
          `
          : `
            <div class="activity-list">
              <strong>So erreichst du dieses Badge</strong>
              <p>${badge.hint}</p>
            </div>
          `
      }
      <button class="primary-button" type="button" ${isAchieved ? `data-open-help="mini"` : `data-open-mini="breath-reset"`}>${badge.ctaLabel}</button>
      <button class="secondary-button" type="button" data-close-overlay>Schließen</button>
    </article>
  `;
  detailScreen.classList.remove("hidden");
  detailScreen.classList.add("active");
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

function renderAll() {
  renderNeeds();
  renderRecommendation();
  renderHomeContinue();
  renderContentTabs();
  renderFilters();
  renderContentList();
  renderProgress();
}

document.addEventListener("click", (event) => {
  const needButton = event.target.closest("[data-need]");
  const navButton = event.target.closest("[data-tab]");
  const openHelpButton = event.target.closest("[data-open-help]");
  const contentTabButton = event.target.closest("[data-content-tab]");
  const filterButton = event.target.closest("[data-filter]");
  const openMiniButton = event.target.closest("[data-open-mini]");
  const completeMiniButton = event.target.closest("[data-complete-mini]");
  const openGuideButton = event.target.closest("[data-open-guide]");
  const startModuleButton = event.target.closest("[data-start-module]");
  const completeModuleButton = event.target.closest("[data-complete-module]");
  const openBadgeButton = event.target.closest("[data-open-badge]");

  if (needButton) {
    selectedNeed = needButton.dataset.need;
    currentRecommendation = miniQuests.find((quest) => quest.needId === selectedNeed);
    renderNeeds();
    renderRecommendation();
    requestAnimationFrame(() => {
      recommendationCard.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  }

  if (navButton) switchTab(navButton.dataset.tab);
  if (openHelpButton) openHelp(openHelpButton.dataset.openHelp || "mini");

  if (contentTabButton) {
    activeContentTab = contentTabButton.dataset.contentTab;
    activeFilter = "Alle";
    renderAll();
  }

  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    renderFilters();
    renderContentList();
  }

  if (openMiniButton) openMiniQuest(openMiniButton.dataset.openMini, currentView);
  if (completeMiniButton) completeMiniQuest(completeMiniButton.dataset.completeMini);
  if (openGuideButton) openGuide(openGuideButton.dataset.openGuide);
  if (startModuleButton) openGuideModule(startModuleButton.dataset.startModule);
  if (completeModuleButton) completeGuideModule(completeModuleButton.dataset.completeModule);
  if (openBadgeButton) openBadgeModal(openBadgeButton.dataset.openBadge);

  if (event.target.closest("[data-open-crisis]")) openCrisis();

  if (event.target.closest("[data-close-overlay]")) closeOverlays();

  if (event.target.closest("[data-finish-home]")) switchTab("home");
});

loadState();
renderAll();
