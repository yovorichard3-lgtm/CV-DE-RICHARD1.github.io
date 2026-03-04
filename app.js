//fonction = truc qui est en bas (dessous)
function applyTheme(theme) {
    document.documentElement.classList.toggle("theme-light", theme === "light")
    const iconTheme = document.querySelector("#icon-theme")
    iconTheme.setAttribute("data-lucide",theme === "light" ? "moon" : "sun" ) 
    lucide.createIcons(); 
}
 

const translations = {
  Fr: {
    title: "EXPERIENCES PROFESSIONNELLES",
  },
  En: {
    title: "PROFESSIONNAL EXPERIENCES",
  }
}
  function setLang(lang) {
    localStorage.setItem("lang", lang)
    location.reload()
}
function applyLang(lang) {
  document.getElementById("EXPERIENCES PROFESSIONNELLES").textContent =
    translations[Fr]

  document.getElementById("PROFESSIONNAL EXPERIENCES").textContent =
    translations[En]

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

}) ( )
