$(document).ready(function(){
    
$('#menu').click(function() {
		$("nav ul").toggleClass("none");
		$(".container").toggleClass("change");

	//	$("nav ul").fadeToggle();
		});


});




$(document.body).click(function(e){
  	var $box = $('nav');
	if(e.target!== 'nav' && !$.contains($box[0], e.target) && !$(".scroll").hasClass("none") )
{
	$("nav ul").addClass("none");
	if ($(".container").hasClass("change")) {$(".container").removeClass("change")};
}

});

