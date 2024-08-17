/**
 *
 */
import {VendingMachineState} from "./vending-machine-state";
import Coin from "./coin";
import Product from "./product";
import VendingMachine from "./vending-machine";
import Note from "./note";

export default class DispenseState implements VendingMachineState {
    private readonly vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    dispenseProduct(): void {
        this.vendingMachine.setState(this.vendingMachine.getReadyState());

        let product = this.vendingMachine.getSelectedProduct();
        if (product) {
            this.vendingMachine.inventory.updateQuantity(product, this.vendingMachine.inventory.getQuantity(product) - 1);
            console.log("Product dispensed: " + product.getName());
            this.vendingMachine.setState(this.vendingMachine.getReturnChangeState()); // Change the state to ReturnChangeState
        }
    }

    insertCoin(coin: Coin): void {
        console.log("Payment already made. Please collect the dispensed product.")
    }

    insetNote(note: Note): void {
        console.log("Payment already made. Please collect the dispensed product.")
    }

    returnChange(): void {
    }

    selectProduct(product: Product): void {
        console.log("Product already selected. Please collect the dispensed product.")
    }

}