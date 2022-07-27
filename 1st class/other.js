
var count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event){
    count++;
    
    
    document.querySelector("p").innerHTML = "You have been pressed " + count;


});
