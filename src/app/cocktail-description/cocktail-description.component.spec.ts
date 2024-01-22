import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDescriptionComponent } from './cocktail-description.component';

describe('CocktailDescriptionComponent', () => {
  let component: CocktailDescriptionComponent;
  let fixture: ComponentFixture<CocktailDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
