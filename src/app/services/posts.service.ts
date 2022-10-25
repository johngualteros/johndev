import { Injectable } from '@angular/core';
import { Post } from '../class/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [
    {
      id: 1,
      logo: '../../../assets/posts/java.png',
      title: 'Testing en Java con JUnit',
      date: '24 de octubre 2022',
      content: `
      <p>Esta es una breve introducción al <span class="bold">testing</span> en <span class="bold">Java</span>
      con <span class="bold">JUnit</span></p>
      `,
      category: ['Java', 'Testing', 'JUnit']
    },
    {
      id: 2,
      logo: '../../../assets/posts/springboot.png',
      title: 'Testeando api rest con springboot y JUnit',
      date: '25 de octubre 2022',
      content: `
      <p>Esta es una breve introducción al <span class="bold">testing</span> en <span class="bold">Java</span>
      con <span class="bold">JUnit</span></p>
      `,
      category: ['Java', 'Testing', 'JUnit', 'Springboot', 'Rest']
    },
  ]
  constructor() { }

  getPosts() {
    return this.posts;
  }
  getPostById(id: number){
    return this.posts.find(post => post.id === id);
  }
  getPostByCategory(category: string){
    return this.posts.filter(post => post.category.includes(category));
  }
}
