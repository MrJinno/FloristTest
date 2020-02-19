import  PriceOfFlower from './Price.js';

 class PriceList{
    constructor(){
        if (PriceList.instance == null){
            this.prices=[]
            PriceList.instance= this
        }
        return PriceList.instance
    }
    put(name, price){
        this.prices.push(new PriceOfFlower(name, price))
    }
    getPriceByName(name){
        let price=-1;
        for (let key of this.prices){
            if (key.name==name){
                return key.price;
            }
        }
        return price;
    }
}
const priceList= new PriceList()
Object.freeze(priceList)
export default priceList