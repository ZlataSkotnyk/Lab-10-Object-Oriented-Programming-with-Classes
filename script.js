class ProducrProperties {
    constructor(name, price, quantity, discount = 0){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
    }
    getTotalValue(){
        return this.price * this.quantity;
    }
    toString(){
        
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`
    }

    static applyDiscount(price, discount){
        let discounted = price - (price * discount);
        return discounted;
    }
}

class PerishableProductProperties extends ProducrProperties {
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString(){
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

let apple = new PerishableProductProperties("Apple", 1.5, 1, "12/12/2025");
let milk = new PerishableProductProperties("Milk", 10.0, 1, "17/12/2025");

console.log(apple.toString());
console.log(milk.toString());





