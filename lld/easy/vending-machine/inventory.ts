/**
 * The Inventory class manages the available products and their quantities in the vending machine.
 * It uses a concurrent hash map to ensure thread safety.
 */
import Product from "./product";

export default class Inventory {
    private readonly products: Map<Product, number>;

    constructor() {
        this.products = new Map();
    }

    addProduct(product: Product, quantity: number) {
        this.products.set(product, quantity);
    }

    removeProduct(product: Product): void {
        this.products.delete(product);
    }

    updateQuantity(product: Product, quantity: number): void {
        this.products.set(product, quantity);
    }

    getQuantity(product: Product): number {
        return this.products.get(product) ?? 0;
    }

    isAvailable(product: Product): boolean {
        return this.products.has(product) && (this.products.get(product) ?? 0) > 0;
    }
}