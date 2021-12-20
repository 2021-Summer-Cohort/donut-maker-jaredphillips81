import {DonutMaker} from "./DonutMaker.js";

const donutMaker = new DonutMaker();
const addNewMultiplier = document.querySelector(".add-new-multiplier");
const addNewClicker = document.querySelector(".add-new-clicker");
const donutEachClick = document.querySelector(".donut-each-click");
const donutEachSecond = document.querySelector(".donut-each-second");
const donutClickButton = document.querySelector(".main-donut-button");
const multiplierCount = document.querySelector(".multiplier-count");
const clickerCount = document.querySelector(".clicker-count");

function runAutoClicker() {
    setInterval(() => {
      for (let i = 0; 
           i < donutMaker.getAutoClicker(); 
           i++) {
        donutMaker.clickDonuts();
      }
    }, 1000);
  };

function newDonutCount(){
    console.log(document);
    donutMaker.clickDonuts();
    donutEachClick.innerText="PIPING HOT DONUTS MADE  ";
    donutEachSecond.innerText = donutMaker.donutCount;
    if(donutMaker.donutCount >= donutMaker.donutMultiplierCost) {
        addNewMultiplier.style.visibility = "visible";
        }
        else{
            addNewMultiplier.style.visibility = "hidden";
        }
        if(donutMaker.donutCount >= donutMaker.autoClickerCost) {
            addNewClicker.style.visibility = "visible";
        }
        else{
            addNewClicker.style.visibility = "hidden";
        }
}
donutClickButton.addEventListener("click", newDonutCount);
addNewMultiplier.addEventListener("click", () => {
    donutMaker.addNewMultiplier();
    donutEachClick.innerText = "MULTIPLIER ADDED!"; 
  //  donutEachClick.innerText = donutMaker.donutMultiplier;
   // multiplierCount.innerText = donutMaker.donutCount;
    // if(donutMaker.donutCount < donutMaker.donutMultiplierPrice){
    //     addNewMultiplier;
    // }
})
donutClickButton.addEventListener("click", newDonutCount);
addNewClicker.addEventListener("click", ()=> {
    runAutoClicker();
    donutMaker.addNewClicker();
    donutEachClick.innerText = "AUTO CLICKER ADDED!";
    
 //   donutEachSecond.innerText = donutMaker.autoClicker;
   // clickerCount.innerText = donutMaker.donutCount;
    // if(donutMaker.donutCount < donutMaker.donutClickerCost){
    //     addNewClicker;
    // }
})


function resetGame(){
}       
