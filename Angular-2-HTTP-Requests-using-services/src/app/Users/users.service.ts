import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';



export class UsersService {

    private url = "https://jsonplaceholder.typicode.com";
    headers: any;

    Get() {
        return this.http.get(this.url);
    }



    deleteUser(user: any) {

        let url = "https://jsonplaceholder.typicode.com/users/" + user.id;

        return this.http.put(url, this.headers).map((res) => {

            // If request fails, throw an Error that will be caught
            if (res.status != 200) {
                window.alert('This request has failed ' + res.status);
            }
            // If everything went fine, return the response
            else {
                return res.json();
            }
        });
    }



    addUser(Id: number, name: string, email: string, phone: string, street: string, suite: string, city: string, zipCode: string) {

        let url = "https://jsonplaceholder.typicode.com/users";
        let body = JSON.stringify({ id: Id, name: name, email: email, phone: phone, street: street, suite: suite, city: city, zipcode: zipCode });

        return this.http.post(url, body, this.headers).map((res) => {

            // If request fails, throw an Error that will be caught
            if (res.status != 201) {
                let msg:any;
                window.alert('This request has failed ' + res.status);
                msg = 'This request has failed';
                return msg;                }
            // If everything went fine, return the response
            else {
                return res.json();
            }
        });
    }


    editUser(id: number, name: string, email: string, phone: string, street: string, suite: string, city: string, zipCode: string) {

        let url = "https://jsonplaceholder.typicode.com/users/" + id;
        let body = JSON.stringify({ name: name, email: email, phone: phone, street: street, suite: suite, city: city, zipcode: zipCode });

        return this.http.patch(url, body, this.headers).map((res) => {

            // If request fails, throw an Error that will be caught
            if (res.status != 200) {
                let msg:any;
                window.alert('This request has failed ' + res.status);
                msg = 'This request has failed';
                return msg;    
            }
            // If everything went fine, return the response
            else {
                return res.json();
            }
        });
    }

    constructor( @Inject(Http) private http: Http) {
        this.url = this.url + "/users";
        this.headers = new Headers({ 'Accept': 'application/json' })
    }
}