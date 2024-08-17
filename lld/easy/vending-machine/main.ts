/**
 * main file to run
 */
import VendingMachine from "./vending-machine";
import Product from "./product";
import Coin from "./coin";
import Note from './note';

function run() {
    let vendingMachine = VendingMachine.getInstance();
    // Add products to the inventory
    let coke = new Product("Coke", 1.5);
    let pepsi = new Product("Pepsi", 1.5);
    let water = new Product("Water", 1.0);

    vendingMachine.inventory.addProduct(coke, 5);
    vendingMachine.inventory.addProduct(pepsi, 3);
    vendingMachine.inventory.addProduct(water, 2);

    // Select a product
    vendingMachine.selectProduct(coke);

    // Insert coins
    vendingMachine.insertCoin(Coin.QUARTER);
    vendingMachine.insertCoin(Coin.QUARTER);
    vendingMachine.insertCoin(Coin.QUARTER);
    vendingMachine.insertCoin(Coin.QUARTER);

    // Insert a note
    vendingMachine.insertNote(Note.FIVE);

    // Dispense the product
    vendingMachine.dispenseProduct();

    // Return change
    vendingMachine.returnChange();

    // Select another product
    vendingMachine.selectProduct(pepsi);

    // Insert insufficient payment
    vendingMachine.insertCoin(Coin.QUARTER);

    // Try to dispense the product
    vendingMachine.dispenseProduct();

    // Insert more coins
    vendingMachine.insertCoin(Coin.QUARTER);
    vendingMachine.insertCoin(Coin.QUARTER);
    vendingMachine.insertCoin(Coin.QUARTER);
    vendingMachine.insertCoin(Coin.QUARTER);

    // Dispense the product
    vendingMachine.dispenseProduct();

    // Return change
    vendingMachine.returnChange();
}
run();