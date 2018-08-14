import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxcalcrecordComponent } from './taxcalcrecord.component';

describe('TaxcalcrecordComponent', () => {
  let component: TaxcalcrecordComponent;
  let fixture: ComponentFixture<TaxcalcrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxcalcrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxcalcrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
