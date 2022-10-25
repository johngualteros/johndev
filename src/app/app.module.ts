import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CardRepositoryComponent } from './card-repository/card-repository.component';
import { Post1Component } from './blog/post1/post1.component';
import { CardPostComponent } from './card-post/card-post.component';
import { CardPostFirstsComponent } from './card-post-firsts/card-post-firsts.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardRepositoryComponent,
    Post1Component,
    CardPostComponent,
    CardPostFirstsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
