// --- API simulée (version démo du portfolio) ---
// Remplace le api.js d'origine, qui appelle le back-end Node/Express sur localhost:5678.
// Mêmes fonctions exportées, mêmes formats de réponse : index.js et login.js ne changent pas.
// Les données vivent dans sessionStorage : ajouts et suppressions tiennent jusqu'à la fermeture de l'onglet.

const DEMO_EMAIL = "sophie.bluel@test.tld";
const DEMO_PASSWORD = "S0phie";
const DEMO_TOKEN = "demo-token";
const STORAGE_KEY = "sophie-bluel-demo-works";

const CATEGORIES = [
  { id: 1, name: "Objets" },
  { id: 2, name: "Appartements" },
  { id: 3, name: "Hotels & restaurants" },
];

// Jeu de données de départ fourni par OpenClassrooms (base SQLite du back-end).
const INITIAL_WORKS = [
  [1, "Abajour Tahina", "abajour-tahina.jpg", 1],
  [2, "Appartement Paris V", "appartement-paris-v.jpg", 2],
  [3, "Restaurant Sushisen - Londres", "restaurant-sushisen-londres.jpg", 3],
  [4, "Villa “La Balisiere” - Port-Louis", "la-balisiere.jpg", 2],
  [5, "Structures Thermopolis", "structures-thermopolis.jpg", 1],
  [6, "Appartement Paris X", "appartement-paris-x.jpg", 2],
  [7, "Pavillon “Le coteau” - Cassis", "le-coteau-cassis.jpg", 2],
  [8, "Villa Ferneze - Isola d’Asti", "villa-ferneze.jpg", 2],
  [9, "Appartement Paris XVIII", "appartement-paris-xviii.jpg", 2],
  [10, "Bar “Lullaby” - Paris", "bar-lullaby-paris.jpg", 3],
  [11, "Hotel First Arte - New Delhi", "hotel-first-arte-new-delhi.jpg", 3],
].map(([id, title, file, categoryId]) => ({
  id,
  title,
  imageUrl: `./assets/images/${file}`,
  categoryId,
  userId: 1,
  category: CATEGORIES.find((category) => category.id === categoryId),
}));

// Petit délai pour imiter un appel réseau.
const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

function loadWorks() {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    // sessionStorage indisponible (navigation privée stricte) : on repart des données de départ.
  }
  return structuredClone(INITIAL_WORKS);
}

function saveWorks(works) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(works));
  } catch {
    // Quota dépassé (image trop lourde) : la modification reste visible jusqu'au rechargement.
  }
}

function requireToken() {
  if (localStorage.getItem("token") !== DEMO_TOKEN) {
    localStorage.removeItem("token");
    window.location.href = "login.html";
    throw new Error("Session expirée, veuillez vous reconnecter");
  }
}

function readAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export async function getWorks() {
  await delay();
  return loadWorks();
}

export async function getCategories() {
  await delay();
  return structuredClone(CATEGORIES);
}

export async function deleteWork(id) {
  requireToken();
  await delay();
  saveWorks(loadWorks().filter((work) => work.id !== id));
}

export async function postWork(formData) {
  requireToken();
  const image = formData.get("image");
  const title = formData.get("title");
  const categoryId = Number(formData.get("category"));
  if (!image || !title || !categoryId) throw new Error("Erreur lors de l'ajout du travail");

  const works = loadWorks();
  const newWork = {
    id: Math.max(0, ...works.map((work) => work.id)) + 1,
    title,
    imageUrl: await readAsDataURL(image),
    categoryId,
    userId: 1,
  };
  saveWorks([...works, { ...newWork, category: CATEGORIES.find((c) => c.id === categoryId) }]);
  await delay();
  return newWork;
}

export async function loginUser(email, password) {
  await delay();
  if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    throw new Error("Email ou mot de passe incorrect");
  }
  return { userId: 1, token: DEMO_TOKEN };
}

// --- Bandeau "démo" (affiché sur index.html et login.html, qui importent tous les deux ce fichier) ---

function showDemoBanner() {
  const banner = document.createElement("div");
  banner.setAttribute("role", "note");
  banner.style.cssText =
    "position:fixed;left:0;right:0;bottom:0;z-index:1000;padding:10px 16px;" +
    "background:#1D6154;color:#fff;font:14px/1.4 'Work Sans',sans-serif;text-align:center";
  banner.innerHTML =
    "<strong>Démo avec données simulées</strong> : aucun serveur, rien n'est envoyé. " +
    `Connexion admin : <code>${DEMO_EMAIL}</code> / <code>${DEMO_PASSWORD}</code>. ` +
    "Les modifications s'effacent à la fermeture de l'onglet.";
  document.body.appendChild(banner);
  document.body.style.paddingBottom = `${banner.offsetHeight + 16}px`;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", showDemoBanner);
} else {
  showDemoBanner();
}
