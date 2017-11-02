
export class UserClass {
    name: string;
    email: string;
    username: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    phone: string;
    id:number;


    constructor(_name: string, _email: string, _phone: string, _street: string, _suite: string, _city: string, _zipcode: string) {
        this.name = _name;
        this.email = _email;
        this.street = _street;
        this.suite = _suite;
        this.city = _city;
        this.zipcode = _zipcode;
    }
}
