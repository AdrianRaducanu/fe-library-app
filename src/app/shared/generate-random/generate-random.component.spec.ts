import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRandomComponent } from './generate-random.component';

fdescribe('GenerateRandomComponent', () => {
  let component: GenerateRandomComponent;
  let fixture: ComponentFixture<GenerateRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should return categories", () => {
    //Proprietatile din componenta initializate
    component.categories = ["Medical", "Thriller", "Programming", "Science", "History"];
    component.weight = [2, 3, 1, 1, 5];

    //Apelarea metodei pe care doresc sa o testez
    let x:String = component.weightRandomGenerator(component.categories, component.weight);

    //Verificarea rezultatelor
    expect(component.categories).toContain(x);
  })
  /*
  import { RandomPageComponent } from './random-page.component';

fdescribe('RandomPageComponent', () => {
  let component: RandomPageComponent;

  beforeEach(() => {
    component = new RandomPageComponent();
  })


});
   */
});
