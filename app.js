const translations ={
    fr:{
        tittle: "CV JOB ETUDIANT",
        desc: "EXPERIENCES PROFESSIONNELLES",
        btn:"Débaler les stocks ",
        msg:"Cassier",
        pt:"LANGUES PARLEES",
        fr:"Français(courant et écrit)",
        pr:"Profil",
        ang:"Anglais(debutant)",
        crd:"COORDONNEES",
        cls:"6e SECONDAIRE",
        qurt:" Rue de dave 462",
        ct:"CENTRE D'INTERET",
        sf:"Sport : Football",
        mc:"Musique et culture",
        cp:"COMPETENCES",
        tsp:",Gestion de la caisse et des paiements",
        ps:"PHOTO SIMPLE",
        jobtitle:"Etudiant",
        mts:"Doté d’un bon sens de l’organisation et d’un esprit d’équipe, je suis prêt à m’investir pleinement dans les missions qui me seront confiées. Désireux d’apprendre et de développer mes compétences, je fais preuve de rigueur et de détermination dans mon travail.",
        exp1:"Aide Ponctuelle",
        loc:"Namur(flawinne)",
        exp:"VENTE DANS UN MAGASIN D'INTERMARCHé",
        ec:"Enregistrer des commandes",
        sd:"Scanner des produits et ranger les rayons",
        dpb:"Diplomé en BAC1 général",
        es:"Actuellement: 6e Secondaire",
        dsp:"DISPONIBILITéS",
        dyp:"Pour voir mes disponibilités,veuillez cliquez sur le button (DSP)",
        ne:"Née le 02 Avril 1999"
       




    },
    en:{
        tittle: "STUDENT JOB CV",
        desc: "PROFESSIONNAL EXPERIENCES",
        btn:"Unpack the stocks",
        msg:"cashier",
        pt:"SPOKEN LANGUAGES",
        fr:"French (fluent and written)",
        pr:"profile",
        ang:"English (beginner)",
        crd:"CONTACT DETAILS",
        cls:"SECONDARY 6",
        qurt:"street of dave 462",
        ct:"CENTER OF INTEREST",
        sf:"Sport: Soccer",
        mc:"Music and culture",
        cp:"SKILLS",
        tsp:"Reception, Customer advice and guidance, Product sales and promotion, Cash and payment management",
        ps:"SIMPLE PHOTO",
        jobtitle:"Student",
        mts:"With good organizational skills and team spirit, I am ready to fully invest in the missions entrusted to me. Eager to learn and develop my skills, I demonstrate rigor and determination in my work.",
        exp1:"Occasional Help",
        loc:"Namur(flawinne)",
        exp:"SALE IN AN INTERMARCHÉ STORE",
        ec:"Save orders",
        sd:"Scan products and tidy shelves",
        dpb:"Graduated in general BAC1",
        es:"Currently: Secondary 6",
        dsp:"AVAILABILITY",
        dyp:"To see my availability, please click on the button (DSP)",
        ne:"Born April 2, 1999"
    



        
    },
    nld:{
        title:"CV van studentenjob",
    }
    
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
   if (lang === "fr"){
    btnlang.textcontent = "en"
   }
   else if (lang === "en"){
    btnlang.textcontent = "nld"
   }
   else {
        btnlang.textContent = "fr"
    }
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