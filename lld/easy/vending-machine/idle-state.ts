/**
 * The IdleState, ReadyState, and DispenseState classes implement the VendingMachineState interface and define
 * the specific behaviors for each state.
 */
import {VendingMachineState} from "./vending-machine-state";
import Coin from "./coin";
import Product from "./product";
import VendingMachine from "./vending-machine";
import Note from "./note";

export default class IdleState implements VendingMachineState {
    private readonly vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    dispenseProduct(): void {
        console.log("Please select a product and make payment.")
    }

    insertCoin(coin: Coin): void {
        console.log("Please select a product first.")
    }

    insetNote(note: Note): void {
        console.log("Please select a product first.")
    }

    returnChange(): void {
        console.log("No change to return.")
    }

    selectProduct(product: Product): void {
        if (this.vendingMachine.inventory.isAvailable(product)) {
            this.vendingMachine.setSelectedProduct(product);
            this.vendingMachine.setState(this.vendingMachine.getReadyState());
            console.log("Product selected: " + product.getName());
        } else {
            console.log("Product not available: " + product.getName());
        }
    }

}