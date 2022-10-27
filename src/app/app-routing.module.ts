import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Post1Component } from './blog/post1/post1.component';
import { Post3Component } from './blog/post3/post3.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'blog/post/1', component: Post1Component },
  { path:'blog/post/3', component: Post3Component },
  { path:'**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
