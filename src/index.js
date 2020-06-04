import "./styles.css";
import "./styles.scss";
console.log("hello world!");
import { annotate, annotationGroup } from 'rough-notation';
import ScrollMagic from 'scrollmagic';


/*
//rough notation
const a1 = annotate(document.querySelector('.ds'), { type: 'underline', color: '#1ED65F' });
const a2 = annotate(document.querySelector('.brd'), { type: 'box', color: '#1ED65F'});
const ag = annotationGroup([a1, a2]);
ag.show();

if(window.innerWidth < 1000) {
  ag.hide();
}
*/





//scrollmagic
var controller = new ScrollMagic.Controller();


new ScrollMagic.Scene({
	duration: 100, // the scene should last for a scroll distance of 100px
  offset: 50, // start this scene after scrolling for 50px
  triggerElement: ''
})
	.setPin('.title') // pins the element for the the scene's duration
	.addTo(controller); // assign the scene to the controller






//isotope
var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
jQueryBridget( 'isotope', Isotope, $ );


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





