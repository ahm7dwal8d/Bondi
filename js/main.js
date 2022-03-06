// Change landingSection backgroundImage
let landingSection = document.querySelector(".landing")

let landingArrey = [ "slide-1.jpg" , "slide-2.jpg" , "slide-3.jpg"]

let RandomNumber = Math.floor(Math.random() * landingArrey.length)

setInterval(function() {
    let RandomNumber = Math.floor(Math.random() * landingArrey.length);
    landingSection.style.backgroundImage = "url(images/landing-bg/"+ landingArrey[RandomNumber]+")"
} , 10000)

let Header = document.querySelector("nav")
let ButtonUp = document.querySelector(".up")


window.onscroll = function () {
    console.log(`scrolling value is ${window.scrollY}`)
    // Button Scroll To Top 
    if (window.scrollY >= 800) {
        ButtonUp.classList.add("fixed")
    } else {
        ButtonUp.classList.remove("fixed")
    }
    // Fixed Header 
    if (window.scrollY >= 800) {
        Header.classList.add("fixed")
    } else {
        Header.classList.remove("fixed")
    }
}

// Click Button To Scroll To Top 

ButtonUp.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

// Click Search Icon 
let SearchIcon = document.querySelector("nav .search")
let Input = document.querySelector(".input")
let ExitInput = document.querySelector(".input .exit")

SearchIcon.addEventListener("click" , function () {
    Input.classList.add("active")
})

ExitInput.addEventListener("click" , function () {
    Input.classList.remove("active")
})

// Click login Button

let loginButton = document.querySelector("nav .btn")
let form = document.querySelector(".login")

loginButton.addEventListener("click" , function () {
    form.classList.add("active")
})

let Clicklogin = document.querySelector(".login .exit")

Clicklogin.addEventListener("click" , function () {
    form.classList.remove("active")
})

// Click To Show Password

let ButtonPassword = document.querySelector(".show")
let InputPassword = document.querySelector("#passvalid")
console.log(InputPassword)

ButtonPassword.onclick = function () {
    if (this.textContent === "Show Password") {
        InputPassword.setAttribute("type" , "text")
        this.textContent = "Hide Password"
    } else {
        InputPassword.setAttribute("type" , "password")
        this.textContent = "Show Password"
    }
}