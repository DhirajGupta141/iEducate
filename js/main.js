// console.log("Hey There")

// Slider show code start

let sliderIndex = 0;

const myFunSlider = () => {
        let sliders = document.getElementsByClassName("slider");
        let dots = document.getElementsByClassName("dot");
        var i = 0;
        // making display as none so that we could show the images in a order
        for (i = 0; i < sliders.length; i++) {
            sliders[i].style.display = "none";
        }
        // removing the active class from all the dots to show a perticular dot as active using sliderIndex
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Checking the boundary case
        if (sliderIndex >= sliders.length) {
            sliderIndex = 0;
        }

        sliders[sliderIndex].style.display = "block";
        dots[sliderIndex].className += " active";
        sliderIndex++;
        setTimeout(myFunSlider, 2000); //will be called infinitely after 2 sec 

    }
    //calling the slider function
myFunSlider();

// Slider show code End



// Sticky Nav bar start

var navbar = document.getElementById("stick-to-top");
var topOffset = navbar.offsetTop;

const stickToTop = () => {
    if (window.pageYOffset >= topOffset) {
        navbar.classList.add("sticky-navigation");
    } else {
        navbar.classList.remove("sticky-navigation");
    }
}
window.onscroll = stickToTop(); //this function and z-index makes the navbar to come on top of slider
// Sticky Nav bar start


// Navigation background above the slider without over the slider
// window.onscroll = function() { myFunction() };

// function myFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("stick-to-top").classList.add("sticky-navigation");
//     } else {
//         document.getElementById("stick-to-top").classList.remove("sticky-navigation");
//     }
// }

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#stick-to-top').addClass('changed-bg');
    } else {
        $('#stick-to-top').removeClass('changed-bg');
    }
});


// Burger Toggle start

// Gyan --> toggle means agar given class laga and toh nikal do nahi toh laga do

let burger = document.querySelector(".burger");
let navigationHeight = document.querySelector(".navigation");
let navLeft = document.querySelector(".nav-left");
let navRight = document.querySelector(".nav-right");

burger.addEventListener("click", () => {
    navLeft.classList.toggle("visibility-resp");
    navRight.classList.toggle("visibility-resp");
    navigationHeight.classList.toggle("height-nav-resp");

})


// Burger Toggle End