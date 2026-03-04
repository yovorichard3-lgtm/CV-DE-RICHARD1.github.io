const translations ={
    fr:{
        tittle: "je ne sais pas",
    },
    en:{
        tittle: "i don't know",
    },
    fr:{
        desc: "EXPERIENCES PROFESSIONNELLES",
    },
    en:{
        desc: "PROFESSIONNAL EXPERIENCES",
    },
    fr:{
        desc:"2023 Aide ponctuelle",
    },
    en:{
        desc:"2023 One-off assistance",
    },


}






//fonction = truc qui est en bas (dessous)
function applyTheme(theme) {
    document.documentElement.classList.toggle("theme-light", theme === "light")
    const iconTheme = document.querySelector("#icon-theme")
    iconTheme.setAttribute("data-lucide",theme === "light" ? "moon" : "sun" ) 
    lucide.createIcons(); 
}
 function applyLang(lang) {
    document.documentElement.lang = lang
    const dict =translations[lang]
    document.querySelectorAll("[data-i18n]").forEach((el)=>{
        const key=el.getAttribute("data-i18n")
        const value= dict[key]
        if(value) el.textContent= value
    })
    const btnlang= document.querySelector("#btn-lang")
    btnlang.textContent=lang
 }
 






(function init(){
    lucide.createIcons();       

    const savedTheme = localStorage.getItem("theme") 
    applyTheme(savedTheme);

    const savedLang = localStorage.getItem("lang") 
    applyLang(savedLang);

    document.querySelector("#btn-theme").addEventListener("click", () => {
        const isLight = document.documentElement.classList.contains("theme-light")
        const next = isLight ? "dark" : "light"
        localStorage.setItem("theme", next);
        applyTheme(next)
    })
  document.querySelector("#btn-lang").addEventListener("click", () => {
        const curent = document.documentElement.lang || "fr"
        const next = curent === "fr"? "en": "fr"
        localStorage.setItem("lang", next);
        applyLang(next)
    })
}) ()