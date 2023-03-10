document.querySelector('body').onscroll = function() {fadeFunction(),fadeInfunction()};

function fadeFunction(){
    document.getElementById('welcome_message').classList.add('fade');
    
}

function fadeInfunction(){
    document.getElementById('BioContent').style.opacity = "1",
    document.getElementById('BioContent').style.transitionDuration = "5s",
    document.getElementById('divider').style.opacity = "1",
    document.getElementById('divider').style.transitionDelay = "8s",
    document.getElementById('divider').style.transitionDuration = "5s",
    document.getElementById('divider2').style.opacity = "1",
    document.getElementById('divider2').style.transitionDelay = "8s",
    document.getElementById('divider2').style.transitionDuration = "5s",
    document.getElementById('icons').style.opacity = "1",
    document.getElementById('icons').style.transitionDelay = "8s",
    document.getElementById('icons').style.transitionDuration = "5s",
    document.getElementById('graph1').style.opacity = "1",
    document.getElementById('graph1').style.transitionDelay = "8s",
    document.getElementById('graph1').style.transitionDuration = "5s";
    document.getElementById('graph2').style.opacity = "1",
    document.getElementById('graph2').style.transitionDelay = "8s",
    document.getElementById('graph2').style.transitionDuration = "5s";
}

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = 0);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("workSlides");
    if(n > slides.length) {slideIndex =1}
    if(n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}