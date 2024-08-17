/**
 * The VendingMachineState interface defines the behavior of the vending machine in different states, such as idle, ready, and dispense
 */
import Product from "./product";
import Coin from "./coin";

export interface VendingMachineState {
    selectProduct(product: Product): void;

    insertCoin(coin: Coin): void;

    insetNote(note: Note): void;

    dispenseProduct(): void;

    returnChange(): void;
}