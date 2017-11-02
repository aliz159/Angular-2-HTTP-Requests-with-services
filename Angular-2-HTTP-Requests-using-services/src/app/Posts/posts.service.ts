import { Http } from '@angular/http'; 
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';



export class PostsService {

    private url: string;

    Get() {
        return this.http.get(this.url);
    }

    constructor( @Inject(Http) private http: Http) {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }
}