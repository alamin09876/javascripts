// window.addEventListener("load", function(){
//     console.log("load")
// })
// window.addEventListener("unload", function(){
//     console.log("unload")
// })
// window.addEventListener("scroll", function(){
//     console.log("scroll")
// })

// window.addEventListener("resize", function(){
//     var width = this.window.outerWidth;
//     var height = this.window.outerHeight;

//     console.log(`height: ${width}, width${width}`);
// });
var details = document.querySelector("details");

details.addEventListener("toggle", function(e){
    console.log(e.target.open);
} );

