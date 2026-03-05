const translations ={
    fr:{
        tittle: "CV JOB ETUDIANT",
        desc: "EXPERIENCES PROFESSIONNELLES",
        btn:"2023 Aide ponctuelle",
        msg:"2022 BENEVOLAT",
        pt:"LANGUES PARLEES",
        fr:"Français(courant et écrit)",
        ang:"Anglais(debutant)",
        crd:"COORDONNEES",
        cls:"6e SECONDAIRE",
        qurt:"Rue de Dave",
        ct:"CENTRE D'INTERET",
        sf:"Sport : Football",
        mc:"Musique et culture",
        cp:"COMPETENCES",
        tsp:"Travailleur, serieux,polyvalent",
        ps:"PHOTO SIMPLE",
    },
    en:{
        tittle: "STUDENT JOB CV",
        desc: "PROFESSIONNAL EXPERIENCES",
        btn:"2023 One-off Assistance",
        msg:"2022 VOLUNTEERING",
        pt:"SPOKEN LANGUAGES",
        fr:"French (fluent and written)",
        ang:"English (beginner)",
        crd:"CONTACT DETAILS",
        cls:"SECONDARY 6",
        qurt:"Dave Street",
        ct:"CENTER OF INTEREST",
        sf:"Sport: Soccer",
        mc:"Music and culture",
        cp:"SKILLS",
        tsp:"Hardworking, serious, versatile",
        ps:"SIMPLE PHOTO",

        
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
        const value= dict?.[key]
        if(value) el.textContent= value
    })
    const btnlang= document.querySelector("#btn-lang")
    btnlang.textContent= lang === "fr"? "en": "fr"
 }
 






(function init(){
    lucide.createIcons();       

    const savedTheme = localStorage.getItem("theme") 
    applyTheme(savedTheme);

    const savedLang = localStorage.getItem("lang") 
    if (savedLang) applyLang(savedLang);

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