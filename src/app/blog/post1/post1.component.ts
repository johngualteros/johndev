import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/class/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.sass']
})
export class Post1Component implements OnInit {

  @ViewChild('content_post') post_content: ElementRef;

  content: string | undefined;
  post: any;
  id: number = 1;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.content = this.getPostById(this.id)?.content;
    this.post = this.getPostById(this.id);
  }

  getPostById(id: number) {
    return this.postsService.getPostById(id);
  }
  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      this.post_content.nativeElement.innerHTML = this.content;
    }, 500);
  }

}
