import Rose from './FlowerType/Rose.js'
import Freesia from './FlowerType/Freesia.js'
import Lilac from './FlowerType/Lilac.js'
import Peony from './FlowerType/Peony.js'
import pl from './PriceList.js';
import { Customer } from './Customer.js';
import { Box } from './Box.js';


function valueOf(box, color){
let summ=0;
let flowers=box.flowersList;
for (let i=0;i<flowers.length;i++){
    if (flowers[i].color===color){
        summ=summ+flowers[i].getTotalPrice();
    }
}
return summ;
}
// Kwiaciarnia samoobsługowa
// ustalenie cennika
pl.put("róża", 10.0)
pl.put("bez", 12.0)
pl.put("piwonia", 8.0)
// Przychodzi klient janek. Ma 200 zł
let janek=new Customer("Janek", 200);
// Bierze różne kwiaty: 5 róż, 5 piwonii, 3 frezje, 3 bzy
janek.add(new Rose(5));
janek.add(new Peony(5));
janek.add(new Freesia(3));
janek.add(new Lilac(3));
// Pewnie je umieścił na wózku sklepowyem
// Zobaczmy co tam ma
let wozekJanka=janek.shoppingCart;
console.log("Przed płaceniem " + wozekJanka.toString());
// Teraz za to zapłaci...
janek.pay();
// Czy przypadkiem przy płaceniu nie okazało się,
// że w koszu są kwiaty na które nie ustalono jeszcze ceny?
// W takim arzie zostałyby usunięte z wózka i Janek nie płaciłby za nie
 // Również może mu zabraknąc pieniędzy, wtedy też kwaity są odkładane.
 console.log("Po zapłaceniu " + wozekJanka.toString())
 // Ile Jankowi zostało pieniędzy?
 console.log("Jankowi zostało: " + janek.wealth + " zł")
 // Teraz jakos zapakuje kwiaty (może do pudełka)
 let pudelkoJanka= new Box(janek);
 janek.pack(pudelkoJanka);
 // Co jest teraz w wózku Janka...
// (nie powinno już nic być)
console.log("Po zapakowaniu do pudełka: " + wozekJanka.toString());
// a co w pudełku
console.log(pudelkoJanka.toString());
// Zobaczmy jaka jest wartość czerwonych kwiatów w pudełku Janka
console.log("Czerwone kwiaty w pudełku Janka kosztowały: " + valueOf(pudelkoJanka, "czerwony"));
// Teraz przychodzi Stefan
// ma tylko 60 zł
let stefan= new Customer("Stefan", 60);
// Ale nabrał kwiatów nieco za dużo jak na tę sumę
stefan.add(new Lilac(3));
stefan.add(new Rose(5));
// co ma w wózku
console.log(stefan.shoppingCart.toString());
// płaci i pakuje do pudełka
stefan.pay();
let pudelkoStefana= new Box(stefan);
stefan.pack(pudelkoStefana);
// co ostatecznie udało mu się kupić
console.log(pudelkoStefana.toString());
// ... i ile zostało mu pieniędzy
console.log("Stefanowy zostało: " + stefan.wealth + " zł")