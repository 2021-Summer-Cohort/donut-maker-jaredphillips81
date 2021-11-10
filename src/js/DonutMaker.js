class DonutMaker{

    constructor(){

    this.donutCount = 0;
    this.donutClicker = 0;
    this.madeDonut = 1;
    this.donutClickerCost = 100;
    this.donutMultiplier = 0;
    this.donutMulitplierCost = 10;
    }
    
    clickDonuts(){
        this.donutCount + this.madeDonut;
        if(this.donutCount >= 0 && this.donutMultiplier >= 0){
            this.donuts = Math.ceil(this.donutCount * Math.pow(1.2, this.donutMultiplier)).toFixed(1);    }
        else{
            this.donutCount++;
        }
        if(this.donutClicker >= 1 && this.donutCount >=2){
            this.donutCount = Math.ceil(this.donutCount * Math.pow(1.1, this.donutClicker))
        }
        else{
            this.donutCount++;
        }
    }
    increaseMultiplierCost(){
        this.donutMultiplierCost *= 1.2;
        this.donutMultiplierCost = this.donutMulitplierCost;
    }
    increaseClickerCost(){
        this.donutClickerCost *= 1.1;
        this.donutClickerCost = this.donutClickerCost;
    }
    addNewMultiplier(){
        if(this.donutCount >= this.donutMultiplierCost){
            this.donutCount -= this.donutMulitplierCost;
            this.increaseMultiplierCost();
            this.donutMultiplier += 1;
        }
    }
    addNewClicker(){
        if(this.donutCount >= this.donutClickerCost){
            this.donutCount -= this.donutClickerCost;
            this.increaseClickerCost();
            this.donutClicker += 1;
        }
    }
    getDonutCount(){
        return this.donutCount; 
    }
    getClickerCount(){
        return this.donutClicker;
    }
    getMultiplierCount(){
        return this.donutMultiplier;
    }


export {DonutMaker}