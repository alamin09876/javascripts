
var name, age, country;

name ="Al-amin";
age=23;
country= "bangladesh";
document.write(name); 
document.write('<br/>');
document.write(age);
document.write('<br/>');
document.write(country);


 var num=12;
  num = toString(num);
   console.log(typeof(num));

 var num="12";
  num = parseInt(num)
 console.log(typeof(num))
 var number=2.2567
//  toFixed Metho
  console.log(number.toFixed(2)); 
 var number=2.2567
//  toPrecision Metho
 console.log(number.toPrecision(2));
//  Number Metho
 console.log(Number("2.2567")); 
// String concatnation
        firstName = "Alamin";
        lastName = " Ahmed";
        fullName = firstName + lastName;
        document.write("My Name is " + fullName);


 var text1 = "Bangladesh"
 var text = text1.length;
 document.write(text)
 var text1 =prompt("Enter Your Name :")
         document.write("Number of crackter" + text1.length)
 var text1 =prompt("Enter Your Name :");
         var text =text1.charAt(3)
         document.write(text)
 var text1 =prompt("Enter Your Name :");
         var text =text1.toUpperCase()
         document.write(text)
 var text1 =prompt("Enter Your Name :");
         var text =text1.slice(0,2)
         document.write(text)
//  First Assignment :

        var text1 =prompt("Enter Your First Name : ");
        var text2 =prompt("Enter Your Last Name : ");

        var text = text1+text2;
        document.write(text);
        document.write('<br/>');
        document.write("Number Of the cheracter" + text.length);
        document.write('<br/>');
        document.write(text.charAt(2));
        
//  Arithematic operator
         5-3
         2
         5*3
         15
         5/4
         1.25
         2**3
         8
         var x = 10
         x++
         10
         x++
         11
         ++x
         13
// Assignment Operator 
        var x = 3;
       var x=-6;
        document.write(x);

// task 3

 var num1 =prompt("Enter first number :");
         var num2 =prompt("Enter second number :")
         num1 = parseInt(num1,10);
         num2 = parseInt(num2,10);
         var sum, sub, multiplaction, division, rem
         sum = num1 + num2;
         document.write(num1 +"+" +num2 + "=" + sum + "<br>")
         sub = num1-num2;
         document.write(num1 +"-" +num2 + "=" + sub + "<br>")
         multiplaction = num1*num2;
         document.write(num1 +"*" +num2 + "=" + multiplaction + "<br>" )
         division = num1/num2;
         document.write(num1 +"/" +num2 + "=" + division + "<br>" )
        rem = num1%num2;
         document.write(num1 +"%" +num2 + "=" + rem );

// Shapes 

 var base =parseFloat(prompt("Enter base number :"));
         var height =parseFloat(prompt("Enter height number :"))
         var area = base * height
         document.write("Area is =" + area);

// Farnheight to celcius :

 var farn =parseFloat(prompt("Enter farn number :"));
         var cels = (farn-32)*(5/9);
         document.write("Celcius is =" + cels);

// celcius to Farnheight :

 var cels =parseFloat(prompt("Enter cels number :"));
         var farn = (cels*(9/5))+32;
         document.write("Farnheight is =" + farn);

// Relational Operator

 var num1 = 20
         var num2 = 30
         document.write(num1>num2);
         document.write('<br/>');
         document.write(num1>=num2);
         document.write('<br/>');
         document.write(num1<=num2);
         document.write('<br/>');
         document.write(num1<num2);
         document.write('<br/>');
         document.write(num1==num2);
         document.write('<br/>');
         document.write(20==20);
         document.write('<br/>');
         document.write(20=="20");
         document.write('<br/>');
         document.write(20==="20");
         document.write('<br/>');
         document.write(20!="20");
         document.write('<br/>');
         document.write(20!=="20")
//  Logical Operator

 var num1 = 50
         var num2 = 30;
         var num3 = 20
         document.write(num1>num2 && num1>num3);
         document.write('<br/>');
         document.write(num1>num2 && num3>num1);
         document.write('<br/>');
         document.write(num1>num2 || num3>num1);
         document.write('<br/>');
         document.write(num2>num1 || num3>num1);
         document.write('<br/>')
         document.write(!(20>15));
         document.write('<br/>');
         document.write(!(20<15))
// Task 4 Grades Problem

 var marks = prompt("Enter Your Marks :")  
         if(marks >= 80 && marks < 100)
             document.write("Your Grade is A+");
         else if(marks >= 70 && marks <= 79 )
             document.write("Your Grade is A");
         else if(marks >= 60 && marks <= 69)
             document.write("Your Grade is A-");
         else if(marks >= 50 && marks <= 59 )
             document.write("Your Grade is B");
         else if(marks >= 40 && marks <= 49)
             document.write("Your Grade is C");
         else if(marks >= 33 && marks <= 39)
             document.write("Your Grade is D");
         else
             document.write("Fail")
// Large number problem
 var num1 = prompt("Enter Number One :");
 var num2 = prompt("Enter Number Two :");
 var num3 = prompt("Enter Number Three :")
 if (num1>num2 && num1>num3)
         document.write("Large Number is "+ num1);
 else if (num2>num1 && num2>num3)
         document.write("Large Number is "+ num2);
 else
         document.write("Large Number is "+ num3)
//  Letter Problem using logical operato
 var letter = prompt("Enter a Letter :")
 letter = letter.toLowerCase()
 if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
         document.write("vowel");
 else 
         document.write("Consonant");
// Switch Case

 var digit = prompt("Enter Any Digit :")
 switch (digit){
         case "0":
                 document.write("Zero");
                 break;
         case "1":
                 document.write("One");
                 break;
         case "2":
                 document.write("Two");
                 break;
         case "3":
                 document.write("Three");
                 break;
         case "4":
                 document.write("Four");
                 break;
         case "5":
                 document.write("Five");
                 break;
         case "6":
                 document.write("Six");
                 break;
         case "7":
                 document.write("Seven");
                 break;
         case "8":
                 document.write("Eight");
                 break;
         case "9":
                 document.write("Nine");
                 break;
         default:
                 document.write("Not A Valid Digit");
         }

// Task 5 using switch case

 var letter = prompt("Enter Any letter :")
 letter = letter.toLowerCase()
 switch (letter){
         case "a":
         case "e":       
         case "i":
         case "o":        
         case "u":
                 document.write("Vowel")
                 break;
         default:
                 document.write("Consonant")
 }
 
// For Loop

 var x
 for(x=1; x<=100; x = x+2){
         document.write(" "+x);
 }
 document.write('<br/>');
 var x
 for(x=100; x>=1; x = x-1){
         document.write(" "+x);
 }
 
 var firstNumber = parseInt(prompt("Enter The FirstNumber :"))
 var lastNumber = parseInt(prompt("Enter The LastNumber :"))
 var sum = 0,x;
 for (x=firstNumber; x<=lastNumber; x=x+1){
         sum = sum + x
 }
 document.write(sum)
 var x
 for(x=1; x<=5; x=x+1){      
         var firstNumber = parseInt(prompt("Enter The FirstNumber :"))
         var secondNumber = parseInt(prompt("Enter The SecondNumber :"))
         var sum = firstNumber + secondNumber
         document.write("Result is =" + sum);
         document.write('<br/>');
 }
 
// While Loop
 var i = 1;
 var sum = 0
 while(i<=100)
         if(i % 3 == 0 && i % 5 == 0){
                 document.write(" " + i);
                 sum = sum + i;
         }      
         i = i+1


 document.write("Sum is "+sum);

//While Loop

 var i=1
 while(i<=10){
         document.write(" " +i);
         i++;
 }
// Do While Loop

// var i=1;

 do {
         document.write(" " +i);
         i++;
 }while(i<=20)

// Break keyword
 var i;
 for(i=1; i<=100; i++){
         if(i==10){
                 break;
         }
         document.write(" " + i);
 }
 document.write("End")
// continue keyword

 var i;
 for(i=1; i<=100; i++){
         if(i % 2 == 0){
                 continue;
         }
         document.write(" " + i);
 }
 document.write("End")
// Ternary Operator
        // 2 condition problem 

 var number = parseInt(prompt("Enter Any NUmber :"))
 var result = number > 0 ? "positive" : "negative"
 document.write(" "+ result)
//  Large Number Problem
 var number1 = parseInt(prompt("Enter First NUmber :"));
 var number2 = parseInt(prompt("Enter Second NUmber :"));
 var number3 = parseInt(prompt("Enter Last NUmber :"));
 var result = number1>number2 && number1>number3 ? "Number1" : number2>number1 && number2>number3 ? "Number2 " : "Number3"
 document.write(" " +result);

// Creating function
 function square1(num){
         var result = num * num;
         document.write("Result is ="+result + "</br>");
 }
 square1(5)
 function square2(num1, num2){
         var result = num1 * num2;
         document.write("Result is ="+result + "</br>");
 }
 square2(5, 6)
 function square3(num1, num2){
         var result = num1 * num2;
         return result;
 }
 document.write("Result is ="+square3(6, 6))
//  Creating a Calculato
 function add(num1, num2){
                 var num1 = parseInt(prompt("Enter first number:"));
                 var num2 = parseInt(prompt("Enter second number:"));
                 var result = num1 + num2;
                document.write("Result is ="+result + "</br>");
 }
          
  function sub(num1, num2)
          {       
                  var num1 = parseInt(prompt("Enter first number:"));
                 var num2 = parseInt(prompt("Enter second number:"));
                var result = num1 - num2;
                  document.write("Result is ="+result + "</br>");
          }
  function mul(num1, num2){
                  var num1 = parseInt(prompt("Enter first number:"));
                  var num2 = parseInt(prompt("Enter second number:"));
                  var result = num1 * num2;
                  document.write("Result is ="+result + "</br>");
          }
   function divi(num1, num2){
                  var num1 = parseInt(prompt("Enter first number:"));
                  var num2 = parseInt(prompt("Enter second number:"));
                  var result = num1 / num2;
                  document.write("Result is ="+result + "</br>");
          }
  function rem(num1, num2){
                  var num1 = parseInt(prompt("Enter first number:"));
                 var num2 = parseInt(prompt("Enter second number:"));
                  var result = num1 % num2;
                  document.write("Result is ="+result + "</br>");
  }
          
 add();
 sub();
 mul();
 divi();
 rem();

// IIFES
// Task 7

 (function display(num1,num2){
         var sum = num1 + num2;
         document.write("result is =" +sum+"<br>");
 })(5, 6);

// Function Expression

 var message=function display(num1,num2){
         var sum = num1 + num2;
         document.write("result is =" +sum);
 }
 message(6,6);

// creating an Array

var names = [" Alamin", " Summa", " Mimma", " Rabi"]
 names.push(" Abu Sulaiman");
 names.push(" Halima Khatun");
 names.pop();
 document.write(names);

// OR
 var names = new Array(5);
 names[0] = "Alamin";
 names[1] = "Summa";
 names[2] = "Mimma";
 names[3] = "Rabi";
 names[4] = "Rushd";

// User input and sum of the input
 var num = new Array();
 for (var i=0; i<5; i++){
         num[i]=parseInt(prompt("Enter A number :"));
 }
 
 var i;
 var sum = 0;
 for (i=0 ;i<5 ; i++){
         console.log( num[ i ]);
         sum = sum + num[i];
 }
 console.log("Sum is="+ sum)

 var names = [" Alamin", " Summa", " Mimma", " Rabi"];
// shift works oposite pop
 names.shift();
// unshift works oposite push
 names.unshift("Halima Khatun");
// Add 2 value using splice
 names.splice(2,0,"Halima Khatun","Abu Sulaiman");
// remove value using splice
 names.splice(1,2);
 names.sort();
 names.reverse();
 document.write(names);


// sorting number
 var number=[25,4,6,47,1];
 number.sort(function(a,b){
         return a-b;
 });
 document.write(number);

//  task 8
var num = new Array();
for (var i=0; i<3; i++){
     num[i]=parseInt(prompt("Enter A number :"));
}

if (num[0]>num[1] && num[0]>num[2])
     document.write("Large Number is "+ num[0]);
else if (num[1]>num[0] && num[1]>num[2])
     document.write("Large Number is "+ num[1]);
else
     document.write("Large Number is "+ num[2]);

// using function to large number
function higestScore(scores){
        var max = scores[0];
        for (var x=1; x<scores.length; x++){
            if(max<scores[x]){
                max = scores[x];
            }
        }
        return max;
    }
    var scores = [21, 28, 1, 88, 15];
    var maxScore = higestScore(scores);
    document.write(maxScore);

// 2d Array higest scorer
function higestRunScore(playerInfo){
        var higestScorer = playerInfo[0][0];
        var higestScorer = playerInfo[0][1];
        for(var x=1; x<playerInfo.length; x++){
            if(higestScorer<playerInfo[x][1]){
                higestScorer = playerInfo[x][1];
                higestScorer = playerInfo[x][0];
            }
        }
        return higestScorer
    }
    var playerInfo = [
        ["Alamin", 95],
        ["Summa", 59],
        ["Mimma", 97],
        ["Rabi", 80],
    ];
    var alamin = higestRunScore(playerInfo);
    document.write(alamin);
//     Creating Object

var student1 = {
        name : "Al-amin",
        age : 24,
        cgpa : 3.5,
        lang : ["english", "Bangla", "hindi"]
    }
    console.log(student1.name);
    console.log(student1.age);
    console.log(student1.cgpa);
    console.log(student1.lang);
// creating templates 
function Student(name, age, cgpa, lang){
        this.name = name;
        this.age = age;
        this.cgpa = cgpa;
        this.lang = lang;
// adding a function in the templates
        this.display = function(){
            console.log(this.name);
            console.log(this.age);
            console.log(this.cgpa);
            console.log(this.lang);
        }
    }

    var student1 = new Student("Alamin", 24, 3.5,["english", "Bangla", "hindi"]);
    var student2 = new Student("Summa", 26, 3.5, ["english", "Bangla", "hindi"]);
    var student3 = new Student("Mimma", 29, 3.5, ["english", "Bangla", "hindi"]);
    var student4 = new Student("Rushd", 31, 3.5, ["english", "Bangla", "hindi"]);

    student1.display();
    student2.display();
    student3.display();
    student4.display();

//     Math object

Math.sqrt(5);
2.23606797749979
Math.sin(2)
0.9092974268256817
Math.abs(-5)
5
Math.sqrt(25);
5
Math.pow(2,4);
16
Math.floor(2.4);
2
Math.ceil(2.1)
3
Math.round(3.4)
3
Math.round(3.6)
4
Math.max(2,-3,6,1,9)
9
Math.random();
0.4742261418886291
Math.random()*6;
3.165452256683758
Math.random()*6 +1;
4.282275996314961
Math.random()*10 + 10;
18.47017386844974

// Guessing Game
        var numofWon = 0;
        var numofLost = 0;
        for (var i =1; i<=5; i++){
            var gussingNumber = parseInt(prompt("Enter a number between 1 to 5 :"));

             var randomNumber = Math.floor(Math.random() *5 + 1);
            if (gussingNumber == randomNumber){
                document.write("You Have Won"+"<br>");
                numofWon++;
            }else{
            document.write("You have lost. the random number was " + randomNumber+"<br>" );
            numofLost++;
        }
        }
        document.write("Total number of Won :" +numofWon + "<br>");
        document.write("Total number of Lost :" +numofLost + "<br>");

// Date objects

        var date = new Date();
        console.log(date); 
        var year = date.getFullYear();
        console.log(year);
        var month = date.getMonth();
        console.log(month);
        var currentDate = date.getDate();
        console.log(currentDate);
        var day = date.getDay();
        console.log(day);
        var minutes = date.getMinutes();
        console.log(minutes);
        var hour = date.getHours();
        console.log(hour);

// DOM (Document Object Element)

// Change html tag value using id 
        <h1 id="alamin">ALamin Ahmed</h1>;
         <h1 id="sulaiman">Abu Sulaiman</h1>;
// Change value . innerHTML change the value
        var changeById = document.getElementById("alamin");
        changeById.innerHTML="Hello Alamin Ahmed"

   // Change value by tag name . innerHTML change the value    

        document.getElementsByTagName("h1")[0].innerHTML="H1";
        // Change value by class name . innerHTML change the value    

        document.getElementsByClassName("first")[0].innerHTML="H1";

// changed value using queryselector
// id using
<h1 id="first">ALamin Ahmed</h1> 
document.querySelector("#first").innerHTML = "changed text";
// class using
document.querySelector(".second").innerHTML = "changed text";
// tag using
document.querySelector("h1").innerHTML = "changed text";
// akta html ar vitora onno akta html tag thakla
<ul>
        <li><a>First</a></li>
        <li>Second</li>
    </ul>
document.querySelector("li a").innerHTML = "changed text";
// div ar moddha thakla class and tag name
<div class="first">
        <a>module</a>
    </div>
document.querySelector(".first a").innerHTML = "changed text";
// querySelectorAll class
<p>first</p>;
<p>second</p>;
document.querySelectorAll("p")[0].innerHTML = "changed ";
// onclick method

<button onclick="myMessage()">Click Me</button>
function myMessage(){
        alert("I am button 1");
    }

// using id to print another value
// html code

{/* <button onclick="myMessage()">Click Me</button>
<button onclick="myMessage2()">Click Me</button>
<p id="paraId"></p> */}
// js code
var myMess = document.querySelector("#paraId");
function myMessage(){
   myMess.innerHTML = "I am paragraph 1"
}
function myMessage2(){
    myMess.innerHTML = "I am paragraph 2"
}

// 
{/* <button onclick="myPicture1()">Alamin</button>
    <button onclick="myPicture2()">Other</button>
    <br>
    <img id="picture" src="#" alt="" height="300px" width="300px"> */}
    
    var myMess = document.querySelector("#picture");
function myPicture1(){
   myMess.src = "img/alamin.jpg";
}
function myPicture2(){
    myMess.src = "img/summa.jpg";

}

// change style using js
<a href="#">Visit Google</a>
var link = document.getElementsByTagName("a")[0];

link.innerHTML ="Visit you tube"
link.style.textDecoration = "none"
link.style.color = "green"
link.href = "https://www.youtube.com/watch?v=B3Q5X8r_ldw&list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX&index=37"

// creatig html element using js

{/* <div id="my-div" style="background-color: brown;">
        <h1>Hello</h1>
        <h1>Good bye</h1>
    </div> */}

var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading three");
heading3.appendChild(text);

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

// remove element
// find the element then use removeChild
var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);
// added element in top


var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading Zero");
heading0.appendChild(text0);


var heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0, heading1);

// find class and add class and also remove class

document.getElementById("my-div").classList;

document.getElementById("my-div").classList.add("my-class2");

document.getElementById("my-div").classList;

document.getElementById("my-div").classList.remove("my-class");

document.getElementById("my-div").classList;

// img slider

{/* <button onClick="prev()">Previous</button>
    <img src="img/alamin.jpg" alt="" width="500px" height="500px">
    <button onClick="next()">Next</button> */}

    var photos = ["img/alamin.jpg", "img/summa.jpg", "img/alamin2.jpg"]

var imgTag = document.querySelector("img");

var count = 0;

function next(){
    count++;
    if(count>=photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}
function prev(){
    count--;
    if(count<0){
        count = photos.length-1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}
//  Changing Css style dynamic

{/* <p id="paraId">This is my paragraph</p>
    <button onClick="addstyle()">AddStyle</button>
    <button onClick="removeStyle()">RemoveStyle</button> */}
    
    var myVar = document.querySelector("#paraId");
    function addstyle(){
        
        myVar.classList.add("para-style");
    }
     function removeStyle(){
         
         myVar.classList.remove("para-style");
     }
     
// annonimus function
{/* <button>CLick Me</button> */}
document.querySelector("button").addEventListener("click", function (){
        alert("Hello");
    });

// event listner
//  <h1>I miss my country</h1>
//  .my-style{
//         color:tomato;
//         font-size:30px;
//         background-color:bisque;
//     }

var myVar = document.querySelector("h1")

myVar.addEventListener("mouseover", function(){
    myVar.classList.add("my-style");
})
myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("my-style");
})

// event listner with multiple elements

{/* <h1>You have not click any button yet</h1>
    <button class="myButton">Button One</button>
    <button class="myButton">Button Two</button>
    <button class="myButton">Button Three</button> */}
    var len = document.querySelectorAll(".myButton").length;

    for (var i=0; i< len; i++){
        document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
            var text = this.innerHTML;
            document.querySelector("h1").innerHTML= text +" is Clicked";
        });
    }

// play audio in javascript
{/* <button class="myButton">Button One</button>
    <button class="myButton">Button Two</button>
    <button class="myButton">Button Three</button> */}
//     button{
//         width: 100px;
//         height: 100px;
//         background-color: blueviolet;
//         color: white;
//     }


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

// Add and remove animation 

{/* <button class="myButton a">a</button>
    <button class="myButton b">b</button>
    <button class="myButton c">c</button> */}

//     button{
//         width: 100px;
//         height: 100px;
//         margin:50px;
//         color: white;
//     }
    
//     .anim{
//         box-shadow: 0 15px 18px 0 tomato;
//         opacity: 0.5;
        
//     }


var len = document.querySelectorAll(".myButton").length;

for (var i=0; i< len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation (text)
    });
}

function audioPlay(text){
    switch (text){
        case "a":
            var audio = new Audio("sounds/one.wav");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/two.wav");
            audio.play();
            break;
        case "c":
                var audio = new Audio("sounds/three.wav");
                audio.play();
                break;
    }
}

function playAnimation (text){
    var selectButton = document.querySelector("." + text);
    selectButton.classList.add("anim");

    setTimeout(function(){
        selectButton.classList.remove("anim");
    },1000);
}

// keypress listener

{/* <button class="myButton a">a</button>
    <button class="myButton b">b</button>
    <button class="myButton c">c</button> */}

//     button{
//         width: 100px;
//         height: 100px;
//         margin:50px;
//         color: white;
//     }
    
//     .anim{
//         box-shadow: 0 15px 18px 0 tomato;
//         opacity: 0.5;
        
//     }


var len = document.querySelectorAll(".myButton").length;

for (var i=0; i< len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation (text)
    });
}

document.addEventListener("keypress", function(event){
    var text = event.key;
    audioPlay(text);
    playAnimation(text);


})
function audioPlay(text){
    switch (text){
        case "a":
            var audio = new Audio("sounds/one.wav");
            audio.play();
            break;
        case "b":
            var audio = new Audio("sounds/two.wav");
            audio.play();
            break;
        case "c":
                var audio = new Audio("sounds/three.wav");
                audio.play();
                break;
    }
}

function playAnimation (text){
    var selectButton = document.querySelector("." + text);
    selectButton.classList.add("anim");

    setTimeout(function(){
        selectButton.classList.remove("anim");
    },1000);
}


{/* <p>This is pressed</p> */}
document.addEventListener("keypress", function(event){
        var text = event.key;
        
        document.querySelector("p").innerHTML = "You have been pressed " + text;
    
    
    });

// count how much crackter you pressed

{/* <textarea name="" id="" cols="30" rows="10"></textarea>
<p>You Hve been pressed</p> */}


var count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event){
    count++;
    
    
    document.querySelector("p").innerHTML = "You have been pressed " + count;


});

// DOm Event

// change 
// checkbox
// h2>How do you like in peogramming</h2>
//     <label for="program">
//         <input type="checkbox" name="program" id="" value="c"/>
//         C
//     </label>
//     <label for="java">
//         <input type="checkbox" name="program" id="" value="java"/>
//         java
//     </label>

var programs = document.querySelectorAll("input[name = program]");
Array.from(programs).map((program)=>{
    program.addEventListener("change", programHandler);
});

function programHandler(e){
    if (e.target.checked){
        console.log(e.target.value);
    }
    
}

// input
{/* <label for="name">Name :
        <input type="text" name="name" class="name-input" id="name-input">

    </label> */}
var input = document.querySelector("input");

 input.addEventListener("change", changeHandler);

 function changeHandler(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
     console.log(e.target.className);
     console.log(e.target.id);
     console.log(e.target.value);

   
 }

//  Select

{/* <label for="name">Depart Name :</label>
    <select name="department" id="department">
        <option value="cse">CSE</option>
        <option value="eee">EEE</option>
        <option value="llb">LLB</option>
    </select> */}

    var department = document.querySelector("#department");

department.addEventListener("change", handlerDepartment);
function handlerDepartment(e){
    console.log("Checked");
    console.log(e.target.value);
}

// submit event 

{/* <form action="">
      <div>
        <label for="name"
          >Name :
          <input type="text" id="name" name="name" required autofocus />
        </label>
      </div>
      <div>
        <label for="email"
          >Email :
          <input type="email" id="email" name="email" size="30" required />
        </label>
      </div>
      <div>
        <label for="password"
          >Password :
          <input
            type="password"
            id="password"
            name="password"
            required
            minlength="4"
            maxlength="8"
          />
        </label>
      </div>
      <div>
        <input type="submit" value="signup" />
      </div>
    </form> */}
//     var form = document.querySelector("form");
// var name = form.querySelector("div #name");
// var email = form.querySelector("div #email");
// var password = form.querySelector("div #password");

// form.addEventListener("submit", formHandler);

// function formHandler(e) {
//     e.preventDefault();
//     var userInfo = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//     };
//     console.log(userInfo);
//     name.value = "";
//     email.value = "";
//     password.value = "";
// }


// audio video event

{/* <video width="400px" controls loops muted>
      <source src="video/Battle_Symphony_(Official_Lyric_Video)_-_Linkin_Park.mp4" type="video/mp4">

      your browser does not support this video
    </video> */}

    var video = document.querySelector("video");

    video.addEventListener("canplay", function(){
        console.log("canplay");
    });
    video.addEventListener("play", function(){
        console.log("play");
    });
    video.addEventListener("pause", function(){
        console.log("pause");
    });
    video.addEventListener("playing", function(){
        console.log("playing");
    });
    video.addEventListener("volumechange", function(){
        console.log("volumechange");
    });
    video.addEventListener("ended", function(){
        console.log("Thanks for watching");
    });

// load unload scroll

// window.addEventListener("load", function(){
//     console.log("load")
// })
// window.addEventListener("unload", function(){
//     console.log("unload")
// })
// window.addEventListener("scroll", function(){
//     console.log("scroll")
// })
// toggle 

{/* <details>
      <summary>Alamin</summary>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, natus?</p>
    </details> */}

//     var details = document.querySelector("details");

// details.addEventListener("toggle", function(e){
//     console.log(e.target.open);
// } );
//  resize event
// window.addEventListener("resize", function(){
//     var width = this.window.outerWidth;
//     var height = this.window.outerHeight;

//     console.log(`height: ${width}, width${width}`);
// });

// MouseEvent 

    // <div>
    //   <p>I am alamin</p>
    // </div>
    var div = document.querySelector("div");

div.addEventListener("click", function(){
    console.log("click is occouard");
})
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
div.addEventListener("mousemove", function(e){
    console.log("clientx" + e.clientX + "clientY " + e.clientY);
})

// click event in mouse event

{/* <div id="my-div" class="my-class">
      <p>I am alamin</p>
    </div> */}

var div = document.querySelector("div");

 div.addEventListener("click", function(e){
     console.log(e.target);
     console.log(e.target.id);
     console.log(e.target.className);
     console.log(e.target.innerHTML);
     console.log(e.target.innerText);
     console.log(e.target.textContent);
     

 })

//  <div id="my-div" class="my-class">
//       <p>I am alamin</p>
//       <button class="btn">button1</button>
//       <button class="btn">button2</button>
//       <button class="btn">button3</button>
//     </div>

 var buttons = document.querySelectorAll(".btn");
Array.from(buttons).map((button)=>{
    button.addEventListener("click", function(e){
        console.log(e.target.innerText);
    });
});

// keyboard Event

{/* <textarea name="" id="" cols="30" rows="10"></textarea> */}

var keyboard = document.querySelector("textarea");

 keyboard.addEventListener("keydown", function(e){
     console.log("e.repeat");
 });
// keyboard.addEventListener("keypress", function(){
//     console.log("keypress");
// });
keyboard.addEventListener("keyup", function(e){
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.code);
    // console.log(e.shiftKey);
});

// focus Event

{/* <input type="text"></input> */}



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









