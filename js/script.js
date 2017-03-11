setInterval(function(){ 
 $("#button").animate({width: "+=30px", height: "+=30px"},500);
 $("#button").animate({width: "-=30px", height: "-=30px"},500);

}, 1000);

$('#button').click(function(){    
    $('body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});
