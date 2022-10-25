import { Component, OnInit } from '@angular/core';
import { Post } from '../class/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.sass']
})
export class NotfoundComponent implements OnInit {

  recentPosts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.recentPosts = this.getPosts().sort((a, b) => a.id < b.id ? 1 : -1 ).slice(0, 8);
  }

  getPosts(){
    return this.postsService.getPosts();
  }

}
