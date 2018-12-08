// Dom Elements
var $slider = $('#js-slider');
var $sliderList = $('.slider-list');
var $sliderItem = $('.js-slider-item');
var $prevBtn = $('#prevBtn');
var $nextBtn = $('#nextBtn');

// Parameters
var viewBox = 2;
var sliderWidth = $slider.width();
var slideWidth = sliderWidth / viewBox;
var maxWidth = ($sliderItem.length - viewBox) * slideWidth;

// Set Item Width
$.each($sliderItem, function(){
  $(this).css('width', slideWidth + 'px');
});

// SLider Start Position
var position = 0;

// Next Slide
$nextBtn.click(function(){
  if (position == maxWidth) return false;

  position += slideWidth;
  $sliderList.css('right', position);
});

// Previous Slide
$prevBtn.click(function(){
  if (position == 0) return false;

  position -= slideWidth;
  $sliderList.css('right', position);
});
