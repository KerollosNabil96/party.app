///<reference types="../@types/jquery"/>
"use strict";
// ------------------------------------------------------------
// ----------------------------Start-Navbar--------------------
const openBtn = document.getElementById("openBtn")
const navbarInfo = document.getElementById("navbarInfo")
const close = document.getElementById("close")
$("#openBtn").on("click" , function(){
$("#navbarInfo").animate( {left : "0"} ,1000)
$("#openBtn").animate( {left : "215px"} ,1000)
})
$("#close").on("click" , function(){
    $("#navbarInfo").animate( {left : "-12.5rem"} ,1000)
    $("#openBtn").animate( {left : "1%"} ,1000)
})
// ----------------------------End-Navbar--------------------


// let togglee = document.getElementsByClassName("toggle")
// let inner = document.getElementsByClassName("inner")
// let sliderDown = document.getElementById("sliderDown")

// $(".toggle").on("click" , function (){
//     $('.inner').not($(".inner")).slideUp(500);
//     $(this).next().slideToggle(500);
// })
// --------------------------------------------------
// --------------------Time-couter--------------------
const secDown = document.getElementById("secDown")
const minutes = document.getElementById("minutes")
const hours = document.getElementById("hours")
const days = document.getElementById("days")

let mathe = new Date("Jan 1, 2024 15:37:25").getTime()
var x = setInterval(()=>{
    let now = new Date().getTime()
    let distance = mathe - now
    let daysCounter = Math.floor(distance/(24*60*60*1000))
    let hoursCouter = Math.floor((distance % (1000*60*60*24))/(1000*60*60))
    let minutesCouter = Math.floor((distance % (1000*60*60))/(1000*60))
    let seconds = Math.floor((distance % (1000*60))/(1000))
    secDown.innerHTML = seconds
    minutes.innerHTML = minutesCouter
    hours.innerHTML = hoursCouter
    days.innerHTML = daysCounter
    if (distance<=0){
        clearInterval(x);
        secDown.innerHTML = "expired"
    minutes.innerHTML = "expired"
    hours.innerHTML = "expired"
    days.innerHTML = "expired"
    }
},1000)
// -----------------------End-Time-Counter-----------------------

// -----------------------Start-Contact-----------------------
let myNumber = document.getElementById("myNumber")
let warningLetter = document.getElementById("warningLetter")
let nvm = document.getElementById("nvm")
$("textarea").on("keydown" , function(){
    let writtenLetters = $(this).val().length ; 
    let mynum = 100
    let lettersRemaining = mynum - writtenLetters
    if(lettersRemaining <=0){
        $("#warningLetter").removeClass("d-none")
        $("#nvm").addClass("d-none")
    }else{
        $("#warningLetter").addClass("d-none")
        $("#nvm").removeClass("d-none")
        myNumber.innerHTML = lettersRemaining
    }
})