function applyTheme(theme) {
    document.documentElement.classList.toggle("theme-light", theme === "light")
    const btnTheme = document.querySelector("#btn-theme")
    btnTheme.textContent = theme === "light" ? "obscure" : "claire"
}

 






(function init(){

    const savedTheme = localStorage.getItem("theme")

    applyTheme(savedTheme)

    document.querySelector("#btn-theme").addEventListener("click", () => {
        const isLight = document.documentElement.classList.contains("theme-light")
        const next = isLight ? "dark" : "light"
        localStorage.setItem("theme", next);
        applyTheme(next)
    })

}) ( )

import {moon, sun} from "lucide";
createIcons({
    Icons:{
        moon,
        sun,
    }
});