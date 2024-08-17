/**
 * The Vehicle class is an abstract base class for different types of vehicles.
 * It is extended by Car, Motorcycle, and Truck classes.
 */

export enum VehicleType {
    CAR = 'CAR',
    MOTORCYCLE = 'MOTORCYCLE',
    TRUCK = 'TRUCK'
}

export default abstract class Vehicle {
    protected licensePlate: string;
    protected type: VehicleType;

    protected constructor(licensePlate: string, type: VehicleType) {
        this.licensePlate = licensePlate;
        this.type = type;
    }

    public getType(): VehicleType {
        return this.type
    }
}