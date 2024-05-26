var body   = document.querySelector("body");
var form   = document.createElement("div");
var header = document.createElement("h4");
var container = document.createElement("div");
var box    = document.createElement("input");
var btn    = document.createElement("button");
var show   = document.querySelector("#randomfield");

body.appendChild(form);

form.appendChild(header);
form.appendChild(container);
form.appendChild(show);

container.appendChild(box);
container.appendChild(btn);

body.classList.add("body");

form.classList.add("form");

header.innerText = "Random character in string!";

header.style.color = "";

container.classList.add("container");

box.innerText    = "";

box.classList.add("input");

show.style.color = "#081f5c";

btn.innerText    = "Click";

btn.classList.add("button");

btn.addEventListener("click",ranchar)

function ranchar() { 
//var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";  
      
      
  
var randomChar = '';
 
var rnum = Math.floor(Math.random() * box.value.length);  
randomChar = box.value[rnum];  

        
document.getElementById("randomfield").innerHTML = randomChar;  
}

  