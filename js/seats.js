  
var app = angular.module('seats', []);

app.controller('SeatsController', ['$http', function($http) {

    this.seats = [];
    var _this = this;

    $http.get('js/seats.json')
        .success(function(data) {
            console.log(data);
            console.log(this);
            _this.seats = data;
        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });
        


   this.activeSeat = "";
   //var seatInfo = "";
   this.chosenStates = [];
   
   this.setActiveSeat = function(item){
    this.activeSeat = item;
    console.log(this.activeSeat);
    
    //this.currentId = this.seats[this.currentSeat].id;//
    this.isVisible = true;
    
    //below is another version that builds each popup window on demand with innerHTML//
    //seatInfo += 'State: ' + this.seats[this.currentSeat].state + '<img src="' + this.seats[this.currentSeat].incumbent.image + '"/>';
     //document.getElementById("hidden-seat").innerHTML = seatInfo;
    };
    
    this.closeBox = function(){
        this.isVisible = false;
    };

    //this was an attempt to write a loop that sorts the seats based on the ones that match the chosen value in a dropdown//
    //this.changeState = function(){
        //for(var i = 0; i < this.seats.length; i++){
            //if (this.seats[i].state == "Oklahoma") {
                //this.chosenStates.push(this.seats[i]);
                  //console.log(this.chosenStates);
            //}
        //}
    //};
    
    //NEED TO WRITE A FUNCTION TO DISPLAY A MESSAGE INSTEAD OF A BIO WHEN INCUMBENT IS NOT RUNNING//

    
}]);