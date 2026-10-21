// Les langues du site : celles des régions que CoOsmos prend en charge (formats et claviers). La langue
// vient des réglages du navigateur du visiteur, sans aucune requête vers un service tiers (une adresse IP
// ne dit pas quelle langue on lit, et l'envoyer à un service de géolocalisation trahirait « aucune donnée
// envoyée »). Le choix fait dans le menu est retenu sur cet appareil. ?lang=xx force une langue.
//
// Les traductions sont rangées par texte français : le français de index.html reste la référence.
const LANGUES = [["fr", "Français"], ["en", "English"], ["de", "Deutsch"], ["es", "Español"], ["it", "Italiano"], ["pt", "Português"]];
const TRADUISIBLES = [
  "nav a:not(.bouton)", "nav a.bouton span", ".orbites span", ".etiquette", "h1 .l > span", ".chapeau", ".note-langue", ".actions .bouton span",
  ".boutons .bouton span", ".reperes span", ".defiler span", ".bandeau span", ".titre-section h2", ".titre-section p",
  ".saut h2", ".saut p", ".carte .nom-app", ".carte h3", ".carte p", ".puces span", ".zeros strong", ".zeros p",
  ".etape h3", ".etape > div > p", ".etape li", ".note", ".config dt", ".config small", ".unite", "summary",
  "details p", "footer nav a",
].join(", ");

const normaliser = s => s.replace(/\s+/g, " ").trim();
const langueDuSite = (() => {
  const codes = LANGUES.map(l => l[0]);
  const demandee = new URLSearchParams(location.search).get("lang");
  if (codes.includes(demandee)) return demandee;
  try { const l = localStorage.getItem("coosmos-langue"); if (codes.includes(l)) return l; } catch (e) {}
  for (const l of navigator.languages || [navigator.language || ""]) {
    const c = String(l).slice(0, 2).toLowerCase();
    if (codes.includes(c)) return c;
  }
  return "en";
})();

// tr() : la traduction d'un texte français (les légendes de l'aperçu passent aussi par là)
const clesVues = new Set();
function tr(francais) {
  const cle = normaliser(francais);
  clesVues.add(cle);
  if (langueDuSite === "fr") return francais;
  const t = (window.TRADUCTIONS && TRADUCTIONS[langueDuSite]) || {};
  return t[cle] !== undefined ? t[cle] : francais;
}

(function traduire() {
  document.documentElement.lang = langueDuSite;
  for (const el of document.querySelectorAll(TRADUISIBLES)) {
    if (el.closest("#langue")) continue;
    const avant = el.innerHTML, apres = tr(avant);
    if (apres !== avant) el.innerHTML = apres;
  }
  for (const img of document.querySelectorAll("img[alt]")) if (img.alt) img.alt = tr(img.alt);
  document.title = tr(document.title);
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = tr(desc.content);
  // l'interface de CoOsmos est en français : on le dit à ceux qui lisent le site dans une autre langue
  if (langueDuSite !== "fr") document.querySelectorAll(".note-langue").forEach(n => { n.hidden = false; });
})();

// Le menu des langues, dans la barre du haut
(function () {
  const boite = document.getElementById("langue");
  if (!boite) return;
  const bouton = boite.querySelector("button"), liste = boite.querySelector("ul");
  bouton.querySelector("b").textContent = langueDuSite.toUpperCase();
  for (const [code, nom] of LANGUES) {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button"; b.lang = code; b.textContent = nom;
    if (code === langueDuSite) b.setAttribute("aria-current", "true");
    b.addEventListener("click", () => {
      try { localStorage.setItem("coosmos-langue", code); } catch (e) {}
      const url = new URL(location.href); url.searchParams.delete("lang");
      url.searchParams.set("lang", code);
      location.href = url.toString();
    });
    li.append(b); liste.append(li);
  }
  const ouvrir = o => { boite.classList.toggle("ouvert", o); bouton.setAttribute("aria-expanded", o); };
  bouton.addEventListener("click", e => { e.stopPropagation(); ouvrir(!boite.classList.contains("ouvert")); });
  document.addEventListener("click", () => ouvrir(false));
  document.addEventListener("keydown", e => { if (e.key === "Escape") ouvrir(false); });
})();

// Pour l'entretien des traductions : ?cles affiche tous les textes à traduire, ?manquantes ceux qui
// n'ont pas encore de traduction dans la langue affichée
addEventListener("load", () => {
  const p = new URLSearchParams(location.search);
  if (!p.has("cles") && !p.has("manquantes")) return;
  const t = (window.TRADUCTIONS && TRADUCTIONS[langueDuSite]) || {};
  const liste = [...clesVues].filter(c => c && (p.has("cles") || t[c] === undefined));
  const pre = document.createElement("pre");
  pre.id = "cles"; pre.textContent = JSON.stringify(liste, null, 1);
  document.body.append(pre);
});
