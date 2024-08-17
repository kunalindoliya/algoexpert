/**
 * CAR vehicle type
 */
import Vehicle, {VehicleType} from "./vehicle";

export default class Car extends Vehicle {
    constructor(licensePlate: string) {
        super(licensePlate, VehicleType.CAR)
    }
}