$(document).ready(function(){
    
	$('#menu').click(function() {

		$("nav ul").toggleClass("none",500);
		$(".container").toggleClass("change");
		});


$(document.body).click(function(e){
  	var $box = $('nav');
	if(e.target!== 'nav' && !$.contains($box[0], e.target) && !$(".scroll").hasClass("none") )
{
	$("nav ul").addClass("none");
	if ($(".container").hasClass("change")) {$(".container").removeClass("change")};
}

});

$("nav ul li a").click(function(){
 
	$("nav ul").addClass("none");
	if ($(".container").hasClass("change")) {$(".container").removeClass("change")}

});
});
