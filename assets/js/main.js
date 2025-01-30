
// slider js
var $carousel = $('[data-owl-carousel]');
if ($carousel.length) {
    $carousel.each(function (index, el) {
        $(this).owlCarousel($(this).data('owl-carousel'));
    });
}

//  event tab

$(function() {
   var $tabButtonItem = $('#tab-button li'),
   $tabSelect = $('#tab-select'),
   $tabContents = $('.tab-contents'),
   activeClass = 'is-active';
   
   $tabButtonItem.first().addClass(activeClass);
   $tabContents.not(':first').hide();
   
   $tabButtonItem.find('a').on('click', function(e) {
   var target = $(this).attr('href');
   
   $tabButtonItem.removeClass(activeClass);
   $(this).parent().addClass(activeClass);
   $tabSelect.val(target);
   $tabContents.hide();
   $(target).show();
   e.preventDefault();
   });
   
   $tabSelect.on('change', function() {
   var target = $(this).val(),
   targetSelectNum = $(this).prop('selectedIndex');
   
   $tabButtonItem.removeClass(activeClass);
   $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
   $tabContents.hide();
   $(target).show();
   });
   });

   // header js     
   
   window.addEventListener("scroll", function () {
       var header = document.querySelector("header");
       header.classList.toggle("sticky", window.scrollY > 50);
   })
 
   // header active link
   
   document.addEventListener('DOMContentLoaded', function () {
       const currentPath = window.location.pathname.split("/").pop();
    
       const navLinks = document.querySelectorAll('.nav-link');
    
       navLinks.forEach(link => {
         if (link.getAttribute('href') === currentPath) {
           link.classList.add('active');
         } else {
           link.classList.remove('active');
         }
       });
     });

// top scroll

window.onscroll = function() {
 scrollFunction()
};

function scrollFunction() {
 var goTopButton = document.getElementById("go-top");
 if (goTopButton) {  // Check if the element exists
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       goTopButton.style.display = "block";
   } else {
       goTopButton.style.display = "none";
   }
 }
}

function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}

// data aos


 AOS.init();
 AOS.refresh(); // initialize AOS animations
 $(document).ready(function(){
     $("body,html").animate({
         scrollTop: 10
     }, 1000);
     $("body,html").animate({
         scrollTop: 0
     }, 1);
 });

// loader js
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
 /* loader.style.display = "none"; */
})