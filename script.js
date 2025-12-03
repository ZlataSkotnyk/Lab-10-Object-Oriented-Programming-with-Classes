class ProducrProperties {
    constructor(name, price, quantity, discount = 0) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = discount;
    }
    getTotalValue() {
        return this.price * this.quantity;
    }
    toString() {
        const discounted = ProducrProperties.applyDiscount(this.price, this.discount);
        const totalAfterDiscount = discounted * this.quantity;
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Total after discount: $${totalAfterDiscount.toFixed(2)}`;
    }

    static applyDiscount(price, discount) {
        const d = (typeof discount === 'number' && !Number.isNaN(discount)) ? discount : 0;
        const clamped = Math.min(Math.max(d, 0), 1);
        return price * (1 - clamped);
    }
}

class PerishableProductProperties extends ProducrProperties {
    constructor(name, price, quantity, expirationDate, discount = 0) {
        super(name, price, quantity, discount);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

let apple = new PerishableProductProperties("Apple", 1.5, 2, "12/12/2025", 0.15);
let milk = new PerishableProductProperties("Milk", 10.0, 1, "17/12/2025", 0.2);

console.log(apple.toString());
console.log(milk.toString());





