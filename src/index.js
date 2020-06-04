import "./styles.css";
import "./styles.scss";
console.log("hello world!");
import { annotate } from 'rough-notation';


//isotope
var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
jQueryBridget( 'isotope', Isotope, $ );





var $grid = $('.grid');

$('.grid').isotope({
  
  itemSelector: '.grid-item',
  layoutMode: 'vertical',
 
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





