import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from './users.service';
import { UserClass } from './user';


@Component({
    selector: 'users',
    styles: [``],
    templateUrl: `./users.component.html`,
    providers: [UsersService]
})

export class UsersComponent {

    loading: boolean = false;
    arUsers: any[];
    boolAddUser: boolean = false;
    boolEditUser: boolean = false;
    boolUserTable: boolean = true;

    private userId: number;
    private name: string;
    private email: string;
    private phone: string;
    private street: string;
    private suite: string;
    private city: string;
    private zipCode: string;
    private newUserId = 10;
    private user: any;
    private msgEdit: any;
    private msgAdd: any;
    private boolmsgEdit = false;
    private boolmsgAdd = false;


    //constructor-------------------------------------------------------------------------
    constructor(private service: UsersService) {
        this.loading = true;
        const req = this.service.Get();

        req.subscribe(posts => {
            this.arUsers = posts.json();
            //console.log(this.arUsers);
            this.loading = false;
        },
            (err) => {
                console.log("error : " + err);
                this.loading = false;
            });
    }


    //Add a user------------------------------------------------------------------------------------------------

    AddUser(myNgForm: any) {
        if (myNgForm.valid) {

            console.log(this.name, this.email, this.phone, this.street, this.suite, this.city, this.zipCode);

            this.newUserId = Number(this.newUserId) + 1;

            this.service.addUser(this.newUserId, this.name, this.email, this.phone, this.street, this.suite, this.city, this.zipCode).subscribe(response => {

                this.msgAdd = response;

                if (this.msgAdd == 'This request has failed') {
                    this.boolmsgAdd = !this.boolAddUser;
                    return this.msgAdd;

                }
                else {

                    window.alert('The user ' + this.name + ' added succefully'); //alert after user succefully added to server

                    //Checking for empty fields and entering only non-empty fields to arUsers
                    if (this.phone != "" && this.street != "" && this.suite != "" && this.city != "" && this.zipCode != "") {
                        const body = { id: this.newUserId, name: this.name, email: this.email, phone: this.phone, street: this.street, suite: this.suite, city: this.city, zipcode: this.zipCode };
                        this.arUsers.push(body);
                        console.log(this.arUsers);
                        this.boolAddUser = !this.boolAddUser;
                        this.boolmsgAdd = false;
                    }
                    else if (this.street != "" && this.suite != "" && this.city != "" && this.zipCode != "") {
                        const body = { id: this.newUserId, name: this.name, email: this.email, street: this.street, suite: this.suite, city: this.city, zipcode: this.zipCode };
                        this.arUsers.push(body);
                        console.log(this.arUsers);
                        this.boolAddUser = !this.boolAddUser;
                        this.boolmsgAdd = false;
                    }
                    else if (this.phone != "" && this.suite != "" && this.city != "" && this.zipCode != "") {
                        const body = { id: this.newUserId, name: this.name, email: this.email, phone: this.phone, suite: this.suite, city: this.city, zipcode: this.zipCode };
                        this.arUsers.push(body);
                        console.log(this.arUsers);
                        this.boolAddUser = !this.boolAddUser;
                        this.boolmsgAdd = false;
                    }
                    else if (this.phone != "" && this.street != "" && this.city != "" && this.zipCode != "") {
                        const body = { id: this.newUserId, name: this.name, email: this.email, phone: this.phone, street: this.street, city: this.city, zipcode: this.zipCode };
                        this.arUsers.push(body);
                        console.log(this.arUsers);
                        this.boolAddUser = !this.boolAddUser;
                        this.boolmsgAdd = false;
                    }
                    else if (this.phone != "" && this.street != "" && this.suite != "" && this.city != "") {
                        const body = { id: this.newUserId, name: this.name, email: this.email, phone: this.phone, street: this.street, suite: this.suite, city: this.city };
                        this.arUsers.push(body);
                        console.log(this.arUsers);
                        this.boolAddUser = !this.boolAddUser;
                        this.boolmsgAdd = false;
                    }
                    else if (this.name != "" && this.email != "" && this.phone != "") {
                        const body = { id: this.newUserId, name: this.name, email: this.email };
                        this.arUsers.push(body);
                        console.log(this.arUsers);
                        this.boolAddUser = !this.boolAddUser;
                        this.boolmsgAdd = false;
                    }
                    else if (this.name != "" && this.email != "") {
                        const body = { id: this.newUserId, name: this.name, email: this.email, phone: this.phone };
                        this.arUsers.push(body);
                        console.log(this.arUsers);
                        this.boolAddUser = !this.boolAddUser;
                        this.boolmsgAdd = false;
                    }
                }
            },
                (err) => {
                    console.log("error : " + err);
                    window.alert(JSON.stringify(err));
                });
        }
    }


    //Edit a user-------------------------------------------------------------------------------------------------
    EditUser(myNgForm: any) {

        if (myNgForm.valid) {

            console.log(this.name, this.email, this.phone, this.street, this.suite, this.city, this.zipCode);

            if (this.userId <= 10) {
                this.service.editUser(this.userId, this.name, this.email, this.phone, this.street, this.suite, this.city, this.zipCode).subscribe(response => {
                    this.msgEdit = response;

                    if (this.msgEdit == 'This request has failed') {
                        this.boolmsgEdit = true;
                        return this.msgEdit;
                    }
                    else {
                        for (let item of this.arUsers) {
                            if (item.id == this.userId) {
                                let index = this.arUsers.indexOf(item);
                                item.name = this.name;
                                item.email = this.email;
                                item.phone = this.phone;
                                this.arUsers[index]['address'].street = this.street;
                                this.arUsers[index]['address'].suite = this.suite;
                                this.arUsers[index]['address'].city = this.city;
                                this.arUsers[index]['address'].zipcode = this.zipCode;
                                window.alert('The user ' + this.name + ' Editing was successful');
                                console.log(this.arUsers);
                                this.boolEditUser = !this.boolEditUser;
                                this.boolmsgEdit = false;
                                break;
                            }
                        }

                    }
                },
                    (err) => {
                        console.log("error : " + err);
                        window.alert(JSON.stringify(err));
                    });
            }
            else {
                for (let item of this.arUsers) {
                    if (item.id == this.userId) {
                        item.name = this.name;
                        item.email = this.email;
                        item.phone = this.phone;
                        item.street = this.street;
                        item.suite = this.suite;
                        item.city = this.city;
                        item.zipcode = this.zipCode;
                        window.alert('user: ' + this.name + ' Editing was successful');
                        console.log(this.arUsers);
                        this.boolEditUser = !this.boolEditUser;
                        break;
                    }
                }
            }
        }

    }

    //Get User To Delete
    GetUserToDelete(user: any) {
        this.user = user;
    }

    //Delete the user
    DeleteUserHandler() {

        console.log(this.user);

        this.service.deleteUser(this.user).subscribe(response => {

            window.alert('The user ' + this.user.name + ' deleted');

            let index = this.arUsers.indexOf(this.user);
            this.arUsers.splice(index, 1);
            console.log(this.arUsers);
        },
            (err) => {
                console.log('error : ' + err);
                window.alert(JSON.stringify(err));
            });
    }


    //show the add user form
    AddAddUserForm() {
        this.boolAddUser = !this.boolAddUser;
        this.name = "";
        this.email = "";
        this.phone = "";
        this.street = "";
        this.suite = "";
        this.city = "";
        this.zipCode = null;
        this.userId = null;
    }

    //show the edit user form With fields filled by user information
    AddEditUserForm(user: any) {
        this.boolEditUser = !this.boolEditUser;
        this.userId = user.id;

        if (this.userId <= 10) {
            this.name = user.name;
            this.email = user.email;
            this.phone = user.phone;
            this.street = user.address.street;
            this.suite = user.address.suite;
            this.city = user.address.city;
            this.zipCode = user.address.zipcode;
        }
        else {
            this.name = user.name;
            this.email = user.email;
            this.phone = user.phone;
            this.street = user.street;
            this.suite = user.suite;
            this.city = user.city;
            this.zipCode = user.zipcode;
        }

    }
}