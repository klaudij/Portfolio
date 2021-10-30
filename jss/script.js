// JSS code van ---->https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
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
var mobilee = document.getElementById("mobile");
var desktopp = document.getElementById('desktop');


// if(localStorage.getItem("theme")== null){
//   localStorage.setItem("theme", "dark")
// }



// let localData = localStorage.getItem('theme');

// if(localData == "dark"){
//   lightDark.src = "img/sun.png";
//   mobilee.src = "img/Group34.svg";
//   desktopp.src = "img/Group35.svg";
//   document.body.classList.remove("light-mode");
// }else if(localData == "light"){
//   lightDark.src = "img/sun.png";
//   mobilee.src = "img/Group34.svg";
//   desktopp.src = "img/Group35.svg";
//   document.body.classList.add("light-mode")
// }


lightDark.onclick = function(){
  document.body.classList.toggle("light-mode");
  if(document.body.classList.contains("light-mode")){
    lightDark.src = "img/moon.png";
    mobilee.src = "img/Group34Light.svg";
    desktopp.src = "img/Group35Light.svg";

    localStorage.setItem("theme", "light")
  }else {
    lightDark.src = "img/sun.png";
    mobilee.src = "img/Group34.svg";
    desktopp.src = "img/Group35.svg";
    localStorage.setItem("theme", "dark")
  }

  
}