/**
 * The Theater class represents a theater with properties such as ID, name, location, and a list of shows.
 */
import Show from "./show";

export default class Theater {
    private readonly id: string;
    private readonly name: string;
    private readonly location: string;
    private readonly show: Show[];


    constructor(id: string, name: string, location: string, show: Show[]) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.show = show;
    }

}