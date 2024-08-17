/**
 * ready state implementation
 */
import {VendingMachineState} from "./vending-machine-state";
import Coin from "./coin";
import Product from "./product";
import VendingMachine from "./vending-machine";
import Note from "./note";

export default class ReadyState implements VendingMachineState {
    private readonly vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    dispenseProduct(): void {
        console.log("Please make payment first.")
    }

    insertCoin(coin: Coin): void {
        this.vendingMachine.addCoin(coin);
        console.log("Coin inserted: " + coin);
        this.checkPaymentStatus();
    }

    insetNote(note: Note): void {
        this.vendingMachine.addNote(note);
        console.log("Note inserted: " + note);
        this.checkPaymentStatus();
    }

    returnChange(): void {
        console.log("Please make payment first.")
    }

    selectProduct(product: Product): void {
        console.log("Product already selected. Please make payment.")
    }

    checkPaymentStatus(): void {
        if (this.vendingMachine.getSelectedProduct()) {
            if (this.vendingMachine.getTotalPayment() >= this.vendingMachine.getSelectedProduct()!.getPrice() ?? 0) {
                this.vendingMachine.setState(this.vendingMachine.getDispenseState());
            }
        }
    }

}