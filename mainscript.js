//Menu interactions
var menuBox = document.getElementById("menuBox")
var menu = document.getElementById("menu")
var homeIcon = document.getElementById("homeIcon")

function menuTransform () {
    menu.style.left = "2vw"
    menu.style.transform = "translateY(-150px)"
    menu.style.padding = "150px 0 150px 0"
    menuBox.style.aspectRatio = "1/3.5"
    menuBox.style.top = "14vh"
    homeIcon.style.display = "block"
    setTimeout(() => {
        homeIcon.style.opacity = 1
        setTimeout(() => {
            menu.removeEventListener("mouseenter", menuTransform)
            menuBox.addEventListener("mouseleave", menuRevert)
        }, 500)
    }, 500)
}

function menuRevert () {
    homeIcon.style.opacity = 0
    setTimeout(() => {
        menu.style.left = "-25px"
        menu.style.transform = "translateY(0)"
        menu.style.padding = "0"
        homeIcon.style.display = "none"
        setTimeout(() => {
            menuBox.removeEventListener("mouseleave", menuRevert)
            menu.addEventListener("mouseenter", menuTransform)
        }, 500)
    }, 500)
}

menu.addEventListener("mouseenter", menuTransform)

// Darkmode toggle
var root = document.querySelector(":root")
var mode = document.getElementById("modeToggle")
var icon = document.getElementById("modeIcon")
var moon = document.getElementById("moon")
var isDark = true

var baseDark = "#212121"
var mainDark = "#3a3a3a"
var shadowDark = "rgba(0, 0, 0, 0.5)"
var baseLight = "#d0d0dc"
var mainLight = "#b0b0bb"
var shadowLight = "rgba(118, 118, 118, 0.7)"

mode.addEventListener("click", function () {
    if (isDark) {
        root.style.setProperty("--base-color", baseLight)
        root.style.setProperty("--main-color", mainLight)
        root.style.setProperty("--shadow-color", shadowLight)
        icon.style.backgroundColor = "yellow"
        icon.style.left = "calc(90% - " + icon.clientWidth + "px)"
        icon.style.boxShadow = "0 0 10px yellow"
        moon.style.opacity = 0
        isDark = false
    }
    else {
        root.style.setProperty("--base-color", baseDark)
        root.style.setProperty("--main-color", mainDark)
        root.style.setProperty("--shadow-color", shadowDark)
        icon.style.backgroundColor = "var(--main-color)"
        icon.style.left = "10%"
        icon.style.boxShadow = "0 0 10px grey"
        moon.style.opacity = 1
        isDark = true
    }
})