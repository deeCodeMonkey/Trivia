

var timer = 7;
var intervalVar; //create var to visualize activity


$(document).ready(function () {  //when doc is ready, execute anonymous function
    intervalVar = setInterval(myFunction, 1000); //execute myFunction at every interval
});

var submitFunction = function () {
    $("#formID").trigger("submit"); //submit is an action for the form, trigger event when submit
    
};

function myFunction() {
    $("#timer").html(timer); //show timer of interval
    timer--;
    if (timer < 0) {
        clearInterval(intervalVar); //stop interval
        submitFunction();
    }
}

$("#submitButton").on("click", submitFunction);  //.on is a function call that takes 2 paramters. first para= name of event, 2nd para= function pointer




