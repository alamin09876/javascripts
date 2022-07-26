
var len = document.querySelectorAll(".myButton").length;

for (var i=0; i< len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
    });
}

function audioPlay(text){
    switch (text){
        case "Button One":
            var audio = new Audio("sounds/one.wav");
            audio.play();
            break;
        case "Button Two":
            var audio = new Audio("sounds/two.wav");
            audio.play();
            break;
        case "Button Three":
                var audio = new Audio("sounds/three.wav");
                audio.play();
                break;
    }
}