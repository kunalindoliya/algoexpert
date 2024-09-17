/**
 * The User class represents a user of the booking system, with properties such as ID, name, and email.
 */

export default class User {
    private readonly id: string;
    private readonly name: string;
    private readonly email: string;


    constructor(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}