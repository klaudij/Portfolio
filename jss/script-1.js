
var mybutton = document.getElementById("back2Top");

mybutton.hidden=true

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.hidden=false;
  } else {
    mybutton.hidden=true;
  }
}

window.onscroll = function() {
  scrollFunction()
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var lightDark = document.getElementById("lightDarkMode");


if(localStorage.getItem("theme") == null){
  localStorage.setItem('theme', "dark");
}


let localData = localStorage.getItem("theme");

if(localData == "dark"){
  lightDark.src = "img/sun.png";

  document.body.classList.remove("light-mode");
}
else if(localData == "light"){
  lightDark.src = "img/moon.png";
  console.log('itworks')

  document.body.classList.add("light-mode");

}


lightDark.onclick = function(){
  document.body.classList.toggle("light-mode");
  if(document.body.classList.contains("light-mode")){
    lightDark.src = "img/moon.png";
    localStorage.setItem('theme', "light");

  }else {
    lightDark.src = "img/sun.png";
    localStorage.setItem('theme', "dark");

  }

  
}
