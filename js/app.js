
var app = angular.module('myApp', ['seats']);

angular.element(document).ready(function () {
    $('#info-icon').click(function(){
         $('#about').fadeToggle( "fast", "linear" );
            });
    
     $('#about-closer').click(function(){
        $('#about').hide();
        });
     
});

app.controller('BaseController', function() {

});
