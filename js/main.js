// Header Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= 600) {

        $(".navbar").addClass("fixed")
        
    } else {

        $(".navbar").removeClass("fixed")

    }


})

$(".navbar ul li a").click(function (event) {

    event.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

    
    var SectionScroll =  "." + $(this).data("scroll")
    
    $("body , html").animate({

        scrollTop: $( "." + $(this).data("scroll")).offset().top - $(".navbar").innerHeight()

    })

})

// Landing Section 

$(window).ready(function () {

    $(".landing").css("opacity","1")

})

let landingSection = document.querySelector(".landing")

let LandingArrey = ["slide-1.jpg" , "slide-2.jpg" , "slide-3.jpg"]

let RandomNumber = Math.floor(Math.random() * LandingArrey.length)

setInterval(function () {
    
    let RandomNumber = Math.floor(Math.random() * LandingArrey.length)

    landingSection.style.backgroundImage = "url(images/"+ LandingArrey[RandomNumber] +")"

} , 10000)


// Portfolio Section 

$(".porfolio a").click(function (el) {

    el.preventDefault()

    $(this).addClass("active").siblings().removeClass("active")

    console.log()

    var BoxFillter = "." + $(this).data("fillter")

    $(".porfolio .row > div").fadeOut()
    $(".porfolio .row "+ BoxFillter +"").fadeIn()


})

// Button To Top 

$("span.up").on("click" ,function () {

    $("html , body").animate({

        scrollTop: 0

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 600) {

        $("span.up").addClass("fixed")

    } else {

        $("span.up").removeClass("fixed")

    }

})