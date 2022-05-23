menu.onclick = function myFunction(){
    var x = document.getElementById('links');
    if(x.className === "nav-links"){
        x.className += " responsive";
    }
    else{
        x.className = "nav-links";
    }

}

$(document).ready(function() {
    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

