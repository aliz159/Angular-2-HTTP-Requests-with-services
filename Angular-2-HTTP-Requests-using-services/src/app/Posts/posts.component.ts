import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from './posts.service';
import { IPost } from './IPost';
import { loadingComponent } from '../loading.component';



@Component({
    selector: 'posts',
    styles: [``],
    templateUrl: `./posts.component.html`,
    providers: [PostsService]
})

export class PostsComponent {

    loading: boolean = false;
    arPosts: IPost[];

    constructor(private service: PostsService) {
        this.loading = true;
        const req = this.service.Get();

        req.map(res => <IPost[]>res.json()).
            subscribe(posts => {
                this.arPosts = posts;
                this.loading = false;
            },
            (err) => {
                console.log("error : " + err);
                this.loading = false;
            });
    } 
}