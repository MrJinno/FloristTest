import { Flower } from "../Flower.js";

export default  class Rose extends Flower{
    constructor(amount){
        super(amount, "róża", "czerwony")
    }
}