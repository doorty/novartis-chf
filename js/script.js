$(document).on('ready page:change', function() {

  // height is dynamic because of table layout
  var frontHeight = $("#highlight-front-face").height();
  $("#highlight-back-face").height(frontHeight);
  $("#highlight-flip-container-inner").height(frontHeight+15);

/*
  $('#highlight-flip-container-outer').on('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault(); // prevent 2 events from firing
    
    $('#highlight-flip-container-inner').toggleClass("flipped");
    
  });
*/
  
  $('.front.face').on('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault(); // prevent 2 events from firing   
    $(this).closest('.cell').addClass("flipped");   
  });
  
  $('h5.title').on('touchstart click', function(e){
    e.stopPropagation(); e.preventDefault(); // prevent 2 events from firing   
    $(this).closest('.cell').removeClass("flipped");   
  });
  
  $('.slider').slider().on('slide', function(ev){
     //$('#bar').val(ev.value);
  });

  
  function hideOtherPages() {
  	$('#page-smiley').addClass('hidden');
	  $('#page-medications').addClass('hidden');
	  $('#page-symptoms').addClass('hidden');
	  $('#page-diet').addClass('hidden');
	  $('#page-activity').addClass('hidden');
	  $('#page-caregiver').addClass('hidden');
	  $('#page-doctor').addClass('hidden');
	  $('#page-date').addClass('hidden');
	  $('#page-message').addClass('hidden');
	  $('#page-patient').addClass('hidden');
	  
	  $('html,body').animate({scrollTop:0},0);
  }
  
  $('#home-btn').on('click', function(e) {
  	e.preventDefault();
  	hideOtherPages();
  	$('#page-date').removeClass('hidden');
	  $('#page-message').removeClass('hidden');
	  $('#page-smiley').removeClass('hidden');
  });
  
  $('#caregiver-btn').on('click', function(e) {
  	e.preventDefault();
  	hideOtherPages();
	  $('#page-caregiver').removeClass('hidden');
  });
  
  $('#doctor-btn').on('click', function(e) {
  	e.preventDefault();
  	hideOtherPages();
	  $('#page-doctor').removeClass('hidden');
  });
  
  $('#patient-btn').on('click', function(e) {
  	e.preventDefault();
  	hideOtherPages();
  	$('#page-date').removeClass('hidden');
	  $('#page-patient').removeClass('hidden');
  });


	$('.symptoms-btn').on('click', function(e) {
  	e.preventDefault();
  	hideOtherPages();
	  $('#page-symptoms').removeClass('hidden');
  });
  
  $('.medications-btn').on('click', function(e) {
  	e.preventDefault();
  	hideOtherPages();
	  $('#page-medications').removeClass('hidden');
  });
  
  $('.diet-btn').on('click', function(e) {
  	e.preventDefault();
  	hideOtherPages();
	  $('#page-diet').removeClass('hidden');
  });
  
  $('.activity-btn').on('click', function(e) {
  	e.preventDefault();
  	hideOtherPages();
	  $('#page-activity').removeClass('hidden');
  });
  
  

});