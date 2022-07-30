// var div = document.querySelector("div");

//  div.addEventListener("click", function(e){
//      console.log(e.target);
//      console.log(e.target.id);
//      console.log(e.target.className);
//      console.log(e.target.innerHTML);
//      console.log(e.target.innerText);
//      console.log(e.target.textContent);
     

//  })

var buttons = document.querySelectorAll(".btn");
Array.from(buttons).map((button)=>{
    button.addEventListener("click", function(e){
        console.log(e.target.innerText);
    });
});
// div.addEventListener("dblclick", function(){
//     console.log("dblclick is occouard");
// })
// div.addEventListener("mousedown", function(){
//     console.log("mousedown is occouard");
// })
// div.addEventListener("mouseup", function(){
//     console.log("mouseup is occouard");
// })
// div.addEventListener("mouseenter", function(){
//     console.log("mouseenter is occouard");
// })
// div.addEventListener("mouseleave", function(){
//     console.log("mouseleave is occouard");
// })
// div.addEventListener("mouseover", function(){
//     console.log("mouseover is occouard");
// })
// div.addEventListener("mousemove", function(e){
//     console.log("clientx" + e.clientX + "clientY " + e.clientY);
//     console.log("offsetX" + e.offsetX + "offsetY " + e.offsetY);
// })