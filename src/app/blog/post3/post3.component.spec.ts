import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post3Component } from './post3.component';

describe('Post3Component', () => {
  let component: Post3Component;
  let fixture: ComponentFixture<Post3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
