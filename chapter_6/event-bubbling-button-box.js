
let but1 = document.querySelector(".btn-warning");
let but2 = document.querySelector(".btn-danger");
let but3 = document.querySelector(".btn-success");
let customBut1 = document.querySelector("#customOne");
let customBut2 = document.querySelector("#customTwo");
let customBut3 = document.querySelector("#customThree");



const buttonBox = document.querySelector(".button-box");
const buttonBoxClassic = document.querySelector(".button-box-classic");

var buttons = [but1, but2, but3];
var classicButtons = [customBut1, customBut2, customBut3];

/*
$(document).ready(function(){
  $("but1").click(function(){
    $("p").toggleClass("black");
  });
});
*/
classicButtons.forEach(  (button) => {
  console.log("Processing: " + button);
  
  button.addEventListener( "click", function turnBlack(e){
    console.log("toggling black");
    button.classList.toggle("black"); // T or F if added
  } );

}); // end for each


buttons.forEach(  (button) => {
    console.log("Processing: " + button);
    
    button.addEventListener( "click", function turnBlack(e){
      console.log("toggling black");
      button.classList.toggle("black"); // T or F if added
    } );

  }); // end for each



//buttonBox.addEventListener("click", () => console.log("button-box EL fired."));