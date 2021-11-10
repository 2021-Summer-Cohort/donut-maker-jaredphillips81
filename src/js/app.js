import {DonutMaker} from "/js/DonutMaker.js";

const donutMaker = new DonutMaker();
const addNewMultiplier = document.querySelector(".add-new-multiplier");
const addNewClicker = document.querySelector(".add-new-clicker");
const donutEachClick = document.querySelector(".donut-each-click");
const donutEachSecond = document.querySelector(".donut-each-second");
const donutClickButton = document.querySelector(".make-donut");
const multiplierCount = document.querySelector(".multiplier-count");
const clickerCount = document.querySelector(".clicker-count");

function newDonutCount(){
    console.log(document);
    donutMaker.clickDonuts();
    donutEachClick.innerText="Donuts Made";
    donutEachSecond.innerText = donutMaker.donutCount;
    if(donutMaker.donutCount >= donutMaker.donutMultiplierCost) {
        addNewMultiplier.style.visibility = "visible";
        if(donutMaker.donutCount >= donutMaker.autoClickerCost) {
             addNewClicker.style.visibility = "visible";
        }
    }
}
donutClickButton.addEventListener("click", newDonutCount);
addNewMultiplier.addEventListener("click", () => {
    donutMaker.addNewMultiplier();
    multiplierCount.innerText = donutMaker.donutMultiplier;
    donutEachSecond.innerText = donutMaker.donutCount;
})
donutClickButton.addEventListener("click", newDonutCount);
addNewClicker.addEventListener("click", ()=> {
    donutMaker.addNewClicker();
    donutEachSecond.innerText = donutMaker.donutCount;
    clickerCount.innerText = donutMaker.clickerCount;
})


function resetGame(){
}       
