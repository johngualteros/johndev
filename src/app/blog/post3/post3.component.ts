import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.sass']
})
export class Post3Component implements OnInit {

  @ViewChild('content_post') post_content: ElementRef;

  content: string | undefined;
  post: any;
  id: number = 3;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.content = this.getPostById(this.id)?.content;
    this.post = this.getPostById(this.id);
  }

  getPostById(id: number) {
    return this.postsService.getPostById(id);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.post_content.nativeElement.innerHTML = this.content;
    }, 500);
  }
}
