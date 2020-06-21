import './styles.scss';
import './styles.css';
import { annotate, annotationGroup } from 'rough-notation';
import Scrollbar from 'smooth-scrollbar';
import { ScrollbarPlugin } from 'smooth-scrollbar';
import Parallax from 'parallax-js';



var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
jQueryBridget( 'isotope', Isotope, $ );


//loading screen 


if (document.location.pathname == "/dist/index.html") {
  
  setTimeout(function(){ 

    $('#loading').addClass('hidden');

    window.location.href = "/dist/home.html";
    

  }, 2000);

 
}



if (document.location.pathname == "/dist/design-system.html" || document.location.pathname == "/dist/philosophy.html" || document.location.pathname == "/dist/branding.html") {
const e = document.querySelector('.active');
const annotation = annotate(e, { type: 'underline' });
annotation.color = '#1ED65F';
annotation.show();
}



//scrollsmooth

const scrollbar = Scrollbar.init(document.querySelector('scrollbar'), {
  damping: 0.09,
  
});



if (document.location.pathname == "/dist/home.html") {

  let arrow = document.body.querySelector('#arrow');
  let scroll1 = document.body.querySelector('#scroll-1');
  
  
  arrow.addEventListener('click', function () {
    scrollbar.scrollIntoView(scroll1);
  });
  
  
}




/*
let damping = 0.01;
Scrollbar.init(document.querySelector('scrollbar'), damping);
*/

//scroll to top

let top = document.querySelector('#top');
let system = document.querySelector('#system');

if (document.location.pathname == "/dist/philosophy.html") {

  top.addEventListener('click', function () {
    scrollbar.scrollIntoView(system);
  });
  
}

// parallax js

if (document.location.pathname == "/dist/branding.html") {
  
  const scene = document.getElementById('scene');
  const parallaxInstance = new Parallax(scene);

  top.addEventListener('click', function () {
    scrollbar.scrollIntoView(system);
  });

}


//isotope


var $grid = $('.grid');

$('.grid').isotope({
  
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
 
});


var $checkboxes = $('.filter-all input');

$checkboxes.change( function() {
  
  var inclusives = [];
  
  $checkboxes.each( function( i, elem ) {
    
    if ( elem.checked ) {
      inclusives.push( elem.value );
    }
  });

  var filterValue = inclusives.length ? inclusives.join(', ') : '*';

  $grid.isotope({ filter: filterValue })
});


/*checkbox filter
$('.filter-all').on('click', 'input', function() {
  var filterValue = this.value;
  $grid.isotope({ filter: filterValue });
});
*/


/*button filter
$('.filter-all').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
*/


//colors generator












/*

color generator 


let colors = ["#F9CF3D","#F6AB55", "#3E8EF1", "#F26A82", "#509BF5","#A1C3D3", "#2C46B9", "#503650", "#F5E72C", "#FFCDD3", "#FFC764","#B59BC9","#006450", "#C97C54", "#4000F5", "#8B1832", "#1E3264", "#FF6436", "#F572A1"];
  let container = document.body.querySelector('.colors-container');
  let div;
  for (let i = 0; i < colors.length; i++) {
  div = document.createElement('div');
  div.classList.add("cube");
  div.style.backgroundColor = colors[i];
  container.appendChild(div);
  







if (document.location.pathname == "/dist/assets.html" || document.location.pathname == "/dist/philosophy.html" || document.location.pathname == "/dist/branding.html") {

  $(".nav-3 a").on("click", function (event) {
    event.preventDefault()

    const href = $(this).attr('href')

    window.history.pushState(null, null, href)

    $(".nav-3 a").removeClass("active")
    $(this).addClass('active')


    $.ajax({
      url: href,
      success: function (data) {
        $("body").fadeOut(250, function () {

          const newPage = $(data).filter("body").html()

          $('body').html(newPage)

          $("body").fadeIn(250)
        })
      }
    })

  })








} */