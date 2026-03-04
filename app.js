//fonction = truc qui est en bas (dessous)
function applyTheme(theme) {
    document.documentElement.classList.toggle("theme-light", theme === "light")
    const iconTheme = document.querySelector("#icon-theme")
    iconTheme.setAttribute("data-lucide",theme === "light" ? "moon" : "sun" ) 
    lucide.createIcons(); 
}
 
// Traductions
const translations = {
  fr: {
    title: "Bienvenue sur mon site",
    desc: "Ceci est un exemple en français"
  },
  en: {
    title: "Welcome to my website",
    desc: "This is an example in English"
  }
}

// Fonction pour changer la langue
function setLang(lang) {
  localStorage.setItem("lang", lang)
  applyLang(lang)
}

// Appliquer la langue
function applyLang(lang) {
  document.getElementById("title").textContent =
    translations[lang].title

  document.getElementById("desc").textContent =
    translations[lang].desc
}

// Au chargement de la page
const savedLang = localStorage.getItem("lang") || "fr"
applyLang(savedLang)



(function init(){
    lucide.createIcons();       
    const savedTheme = localStorage.getItem("theme") 

    applyTheme(savedTheme);

    document.querySelector("#btn-theme").addEventListener("click", () => {
        const isLight = document.documentElement.classList.contains("theme-light")
        const next = isLight ? "dark" : "light"
        localStorage.setItem("theme", next);
        applyTheme(next)
    })

}) ()
