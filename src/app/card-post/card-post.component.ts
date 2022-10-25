import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.sass']
})
export class CardPostComponent implements OnInit {

  @Input() recentPost: any;

  constructor() { }

  ngOnInit(): void {
  }

}
