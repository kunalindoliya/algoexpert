/**
 * The Product class represents a product in the vending machine, with properties such as name and price.
 */

export default class Product {
    private readonly name: string;
    private readonly price: number;


    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name
    }
    getPrice(): number {
        return this.price
    }
}