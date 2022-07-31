

var input = document.querySelector('input');

input.addEventListener("blur", function(e){
    input.value= e.target.value.toUpperCase();
    console.log(e.target.value);
})
input.addEventListener("focus", function(){
    input.style.backgroundColor="Orange";
    input.style.padding = "10px";
    input.style.border="none";
    input.style.marginLeft ="100px";
})
// input.addEventListener("focusin", function(){
//     console.log("focusin is occuped")
// })
// input.addEventListener("focusout", function(){
//     console.log("focusout is occuped")
// })