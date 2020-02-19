import ShoppingCart from "./ShoppingCart.js";

export class Customer{
    constructor(name, wealth){
        this.name=name;
        this.wealth=wealth;
        this.shoppingCart=new ShoppingCart(name);
        this.counter=0;
        this.flowers=this.shoppingCart.flowersList
    }
    add(flower){
        this.shoppingCart.addFlower(flower);
    }
    pay(){
       let summ=0;
        let flowers=this.flowers;
        for (let i=0;i<flowers.length;i++){
            if(flowers[i].price== -1){
                flowers.splice(i,1);
            }
            summ= summ+flowers[i].getTotalPrice();
            if (summ>this.wealth){
            this.counter++;
            summ=summ-flowers[i].getTotalPrice();
            }
        }
        this.wealth=this.wealth- summ;
    }
    pack(box){
        box.packFlowers(this.flowers, this.counter);
        this.shoppingCart.flowersList=null;
    }
}