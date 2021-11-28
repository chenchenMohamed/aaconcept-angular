import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDevisComponent } from './formulaire-devis.component';

describe('FormulaireDevisComponent', () => {
  let component: FormulaireDevisComponent;
  let fixture: ComponentFixture<FormulaireDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
