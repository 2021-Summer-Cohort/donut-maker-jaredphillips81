class DonutMaker{

    constructor(){

    this.donutCount = 0;
    this.autoClicker = 0;
    this.autoClickerCost = 100;
    this.donutMultiplier = 0;
    this.donutMultiplierCost = 10;
    }
    
clickDonuts(){
    this.donutCount += this.donutMultiplier;
    this.donutCount++;
    }
addNewClicker(){
    this.autoClicker++;
    this.donutCount -= this.autoClickerCost;
    this.autoClickerCost *= 1.2;
    this.autoClickerCost = Math.floor(this.autoClickerCost);
    }
addNewMultiplier(){
    this.donutMultiplier++;
    this.donutCount -= this.donutMultiplierCost;
    this.donutMultiplierCost *= 1.1;
    this.donutMultiplierCost = Math.floor(this.donutMultiplierCost);    
    }




// clickMultiplier () {
//     if (this.donutCount - this.donutMultiplierCost >= 0) {
//       this.donutCount -= this.donutMultiplierCost;
//       this.amountOfMultipliers++;
//       this.donutMultiplier = Math.pow(1.2, this.amountOfMultipliers);
//       this.showMultiAmount = Math.pow(1.2, this.amountOfMultipliers + 1);
//       this.donutMultiplierCost *= this.multiplierCost;
//     }
//   }
//   clickAutoClicker () {
//     if (this.donutCount - this.donutClickerCost >= 0) {
//       this.donutCount -= this.donutClickerCost;
//       this.donutClicker++;
//       this.donutClickerCost *= this.donutClickerIncrease;
//     }
// }

//     //     if(this.donutCount >= 0 && this.donutMultiplier >= 0){
//     //         this.donutCount = Math.ceil(this.donutCount * Math.pow(1.2, this.donutMultiplier)).toFixed(2);    }
//     //     else{
//     //         this.donutCount++;
//     //     }
//     //     if(this.donutCount >= 2 && this.donutClicker >= 1){
//     //         this.donutCount = Math.ceil(this.donutCount * Math.pow(1.1, this.donutClicker))
//     //     }
//     //     else{
//     //         this.donutCount++;
//     //     }
//     // }
    
   
    

//     }
//     addNewMultiplier(){
//         this.donutMultiplier++;
//         this.donuts-=this.donutMultiplierCost;
//         this.donutMultiplierCost *= 1.10;
//         this.donutMultiplierCost = Math.floor(this.donutMultiplierCost);
    
//     }
    getDonutCount(){
        return this.donutCount; 
    }
    getClickerCount(){
        return this.donutClicker;
    }
    getMultiplierCount(){
        return this.donutMultiplier;
    }
    getAutoClicker(){
        return this.autoClicker;
    }
    getMultiplierCost(){
        return this.donutMulitplierCost;
    }
    getClickerCost(){
        return this.donutClickerCost;
    }
}

export {DonutMaker}