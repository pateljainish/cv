mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// header fixed on scroll
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("active");
    }
});



$(document).ready(function ($) {
    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }
});







$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });



 //owl carousel //
 $(document).ready(function(){
        $(".owl-one").owlCarousel({
        pagination:true,
        autoPlay:true,
        nav:false,
        dots: true,
        responsive: {
        320: {
        dotsEach:3,
        items: 1,
        margin:50
        },
        480:{
        dotsEach:3,
        items: 1,
        },
        1024: {
        dotsEach:3,
        items: 1
        },
        1366: {
        dotsEach:3,
        items: 1
        }
        }
        });
        });