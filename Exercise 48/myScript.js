// JavaScript - IE Event Model

// get button by its id
var btn2Element = document.getElementById("btn2");

function changeBtnFontSize(event) {
    
    //this.style.fontSize = "40px";
    event.srcElement.style.fontSize = "40px";
    alert(event.type);
    alert(event.srcElement);
}

btn2Element.attachEvent("onclick", changeBtnFontSize);

// remove event handler 
btn2Element.detachEvent("onclick", changeBtnFontSize);


// get element by its id
var aElement = document.getElementById("click-me");

function clickMe(event) {
    alert("You just clicked me!");
   event.returnValue = false;
}

aElement.attachEvent("onclick", clickMe);

























