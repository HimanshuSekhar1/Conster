// FOR RIGHTNAV

const { app } = require("electron");

// const RECENT = document.getElementById("recent");
const MINIMIZE = document.getElementById("minimize");
const MAXIMIZE = document.getElementById("maximize");
const CLOSE = document.getElementById("close");

// RECENT.addEventListener("click", recent);
MINIMIZE.addEventListener("click", minimize);
MAXIMIZE.addEventListener("click", maximize);
CLOSE.addEventListener("click", close);

// function recent () {

// }

function minimize () {
    app.window.minimize();
}

function maximize () {
    app.window.maximize();
}

function close () {
    app.window.close();
}

// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }
  
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }
