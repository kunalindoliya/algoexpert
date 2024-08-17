/**
 * main file to execute program
 */
import ParkingLot from "./parking-lot";
import Level from "./level";
import Vehicle, {VehicleType} from "./vehicles/vehicle";
import Car from "./vehicles/car";
import Truck from "./vehicles/truck";

function run() {
    let parkingLot = ParkingLot.getInstance();
    parkingLot.addLevel(new Level(1, 10, VehicleType.CAR));
    parkingLot.addLevel(new Level(2, 15, VehicleType.TRUCK));

    let car: Vehicle = new Car('abc');
    let truck: Vehicle = new Truck('xyz');

    parkingLot.parkVehicle(car);
    console.log(parkingLot.parkVehicle(truck))

    // Display availability
    parkingLot.displayAvailability();

    // Unpark vehicle
    parkingLot.unparkVehicle(car);

    // Display updated availability
    parkingLot.displayAvailability();
}
run();