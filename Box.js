export class Box{
    constructor(customer){
        this.customer=customer;
        this.flowersList=[];
    }
    packFlowers(listOfFlowers, counter){
        for (let i=0;i<listOfFlowers.length- counter;i++){
            this.flowersList.push(listOfFlowers[i]);
        }
    }
    toString(){
        let text=`Pudełko właściciel:  ${this.customer.name} \n`;
        if (!(Array.isArray(this.flowersList) && this.flowersList.length)){
            return '-- Pusto'
        }
        for (let key of this.flowersList){
            text= text + key.toString() + '\n';
        }
        return text;
    }
}