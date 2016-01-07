$(document).ready(function() {

    $("#ri").click(function() {
    $(".active").fadeOut(300, function() {
            $("#raidin").removeClass("hide");
         	$("#raidin").fadeIn(300);
         });
        $(".active").removeClass("active"); 
        $("#raidin").addClass("active");
    })
    
     $("#abt").click(function() {
    
        $(".active").fadeOut(300, function() {
            $("#about").removeClass("hide");
         	$("#about").fadeIn(300);
         });
        $(".active").removeClass("active"); 
        $("#about").addClass("active");
     })
     
     $("#lo").click(function() {
    
         $(".active").fadeOut(300, function() {
            $("#liftoff").removeClass("hide");
         	$("#liftoff").fadeIn(300);
         });
        $(".active").removeClass("active"); 
        $("#liftoff").addClass("active");
    })
     
     $("#eye").click(function() {
    
    	$(".active").fadeOut(300, function() {
            $("#eyewitness").removeClass("hide");
         	$("#eyewitness").fadeIn(300);
         });
        $(".active").removeClass("active"); 
        $("#eyewitness").addClass("active");
    })
     
    $("#cont").click(function() {
    
    	$("#contact").removeClass("hide");
         $(".active").fadeOut(300, function() {
         	$("#contact").fadeIn(300);
         });
        $(".active").removeClass("active"); 
        $("#contact").addClass("active");
    })

})