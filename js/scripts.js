$(document).ready(function(){
    console.log("DOM loaded!");
    
   $('.clickable').click(function(){
          $('#hidden-seat').fadeToggle( "fast", "linear" );
        });
});
