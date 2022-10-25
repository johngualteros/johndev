import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../class/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  repositories: any;
  posts: Post[];
  recentPosts: Post[];

  constructor(private http: HttpClient, private postsService: PostsService) { }

  ngOnInit(): void {
    this.getRepositories();
    this.posts = this.getPosts();
    this.recentPosts = this.posts.sort((a, b) => a.id < b.id ? 1 : -1).slice(0, 5);
    this.posts = this.posts.reverse().slice(0, 3);
  }

  getPosts() {
    return this.postsService.getPosts();
  }
  getRepositories() {
    this.http.get('https://api.github.com/users/johngualteros/repos').subscribe(response => {
      this.repositories = response;
      //Sort the response by the created_at property
      this.repositories = this.repositories.sort((a:any, b:any) => a.created_at < b.created_at ? 1 : -1);
      //Get only the 5 firsts elements
      this.repositories = this.repositories.slice(0, 5);
    });
  }
  loadMorePosts() {
    this.posts = this.postsService.getPosts();
  }

}
