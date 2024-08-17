/**
 * Motorcycle vehicle
 */
import Vehicle, {VehicleType} from "./vehicle";

export default class Motorcyle extends Vehicle {
    constructor(licenesPlate: string) {
        super(licenesPlate, VehicleType.MOTORCYCLE);
    }
}