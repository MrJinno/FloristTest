export default  class ShoppingCart{
    constructor(name){
       this.flowersList=[];
       this.name=name;
    }
    addFlower(flower){
        this.flowersList.push(flower);
    }
    toString(){
        let text=`Wózek właściciel:  ${this.name} \n`;
        if (!(Array.isArray(this.flowersList) && this.flowersList.length)){
            return '-- Pusto'
        }
        for (let key of this.flowersList){
            text= text + key.toString() + '\n';
        }
        return text;
    }
}