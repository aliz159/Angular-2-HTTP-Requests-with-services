import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { UsersComponent } from './Users/users.component';
import { PostsComponent } from './Posts/posts.component';
import { HomeComponent } from './Home/home.component';
import { loadingComponent } from './loading.component';

import { PageNotFoundComponent } from './PageNotFound/page-not-found.component';


const appRoutes: Routes = [
 { path: 'Home', component: HomeComponent },
 { path: 'Users', component: UsersComponent},
 { path: 'Posts', component: PostsComponent},
 { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [ BrowserModule , HttpModule , FormsModule , RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent , UsersComponent , PostsComponent , HomeComponent , loadingComponent,
                  PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
