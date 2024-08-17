/**
 *
 */
import Inventory from "./inventory";
import {VendingMachineState} from "./vending-machine-state";
import Product from "./product";
import Coin from "./coin";
import IdleState from "./idle-state";
import ReadyState from "./ready-state";
import DispenseState from "./dispense-state";
import ReturnChangeState from "./return-change-state";
import Note from "./note";

export default class VendingMachine {
    private static instance: VendingMachine;
    inventory: Inventory;
    private readonly idleState: VendingMachineState;
    private readonly readyState: VendingMachineState;
    private readonly dispenseState: VendingMachineState;
    private readonly returnChangeState: VendingMachineState;
    currentState: VendingMachineState;
    selectedProduct: Product | null;
    totalPayment: number;

    constructor() {
        this.inventory = new Inventory();
        this.idleState = new IdleState(this);
        this.readyState = new ReadyState(this);
        this.dispenseState = new DispenseState(this);
        this.returnChangeState = new ReturnChangeState(this);
        this.currentState = this.idleState;
        this.selectedProduct = null;
        this.totalPayment = 0.0;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new VendingMachine();
        }
        return this.instance;
    }

    selectProduct(product: Product): void {
        this.currentState.selectProduct(product)
    }

    insertCoin(coin: Coin): void {
        this.currentState.insertCoin(coin);
    }

    insertNote(note: Note): void {
        this.currentState.insetNote(note);
    }

    dispenseProduct() {
        this.currentState.dispenseProduct();
    }

    returnChange() {
        this.currentState.returnChange();
    }

    setState(state: VendingMachineState) {
        this.currentState = state;
    }

    public getIdleState(): VendingMachineState {
        return this.idleState;
    }

    public getReadyState(): VendingMachineState {
        return this.readyState;
    }

    public getDispenseState(): VendingMachineState {
        return this.dispenseState;
    }

    public getReturnChangeState(): VendingMachineState {
        return this.returnChangeState;
    }

    public getSelectedProduct(): Product | null  {
        return this.selectedProduct;
    }

    public setSelectedProduct(product: Product): void {
        this.selectedProduct = product;
    }

    public resetSelectedProduct(): void {
        this.selectedProduct = null;
    }

    public getTotalPayment(): number {
        return this.totalPayment;
    }

    public addCoin(coin: Coin): void {
        this.totalPayment += coin.getValue();
    }

    public addNote(note: Note): void {
        this.totalPayment += note.getValue();
    }

    public resetPayment(): void {
        this.totalPayment = 0.0;
    }


}