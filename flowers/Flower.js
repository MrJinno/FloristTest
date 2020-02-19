import pl from '../PriceList.js'

export class Flower{
constructor(amount, name, color){
    this.amount=amount;
    this.name=name;
    this.color=color;
    this.price=pl.getPriceByName(name);
}
getTotalPrice(){
    return this.amount*this.price;
}
toString(){
    return this.name  +
                ", cena=" + this.price +
                ", ilosc=" + this.amount +
                ", kolor=" + this.color;
}
}