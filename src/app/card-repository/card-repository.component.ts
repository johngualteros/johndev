import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-repository',
  templateUrl: './card-repository.component.html',
  styleUrls: ['./card-repository.component.sass']
})
export class CardRepositoryComponent implements OnInit {

  @Input() repository: any;

  constructor() { }

  ngOnInit(): void {
  }

}
