// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const Store = require('electron-store');
const shell = require('shelljs');

var leftBlock = document.getElementById("left-block");
var instructionsRightBlock = document.getElementById("instructions-right-block");
var listRightBlock = document.getElementById("list-right-block");
const wave1 = document.getElementsByClassName("wave");
const wave2 = document.getElementsByClassName("wave2");

// Setup dependencies and install Partiql
$("#intialize-btn").click(function(){
  instructionsRightBlock.classList.add('animated', 'fadeOutUp');
  
  listRightBlock.style.visibility = "visible";
  listRightBlock.classList.add('animated', 'fadeInUp');
});

function setGameDetails() {

}

function getGameDetails() {

}








