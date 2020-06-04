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
  // options
  itemSelector: '.grid-item',
  layoutMode: 'vertical',
 
});


$('.filter-all').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});




