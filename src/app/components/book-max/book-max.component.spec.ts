import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMaxComponent } from './book-max.component';

describe('BookMaxComponent', () => {
  let component: BookMaxComponent;
  let fixture: ComponentFixture<BookMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
