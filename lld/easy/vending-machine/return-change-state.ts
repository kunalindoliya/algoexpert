import {VendingMachineState} from "./vending-machine-state";
import Coin from "./coin";
import Product from "./product";
import VendingMachine from "./vending-machine";
import Note from "./note";


export default class ReturnChangeState implements VendingMachineState {
    private readonly vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    dispenseProduct(): void {
        console.log("Product already dispensed. Please collect the change.");
    }

    insertCoin(coin: Coin): void {
        console.log("Please collect the change first.");
    }

    insetNote(note: Note): void {
        console.log("Please collect the change first.");
    }

    returnChange(): void {
        let change: number = 0;
        if (this.vendingMachine.getSelectedProduct()) {
           change =  this.vendingMachine.getTotalPayment() - this.vendingMachine.getSelectedProduct()!.getPrice();
        }
        if (change > 0) {
            console.log("Change returned: $" + change);
            this.vendingMachine.resetPayment();
        } else {
            console.log("No change to return.");
        }
        this.vendingMachine.resetSelectedProduct();
        this.vendingMachine.setState(this.vendingMachine.getIdleState());
    }

    selectProduct(product: Product): void {
        console.log("Please collect the change first.");
    }

}