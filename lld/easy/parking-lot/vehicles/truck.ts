/**
 * Truck vehicle
 */
import Vehicle, {VehicleType} from "./vehicle";

export default class Truck extends Vehicle {
    constructor(licensePlate: string) {
        super(licensePlate, VehicleType.TRUCK);
    }
}