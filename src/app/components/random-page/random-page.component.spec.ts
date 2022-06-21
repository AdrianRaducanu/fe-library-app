import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPageComponent } from './random-page.component';

fdescribe('RandomPageComponent', () => {
  let component: RandomPageComponent;
  let fixture: ComponentFixture<RandomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should return categories", () => {
    component.categories = ["A", "B"];
    component.weight = [2, 3];
    component.generateRand()
    expect(component.randomCat).toBe("A" || "B")
  })
});


