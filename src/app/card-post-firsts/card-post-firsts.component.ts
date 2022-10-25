import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post-firsts',
  templateUrl: './card-post-firsts.component.html',
  styleUrls: ['./card-post-firsts.component.sass']
})
export class CardPostFirstsComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
  }

}
