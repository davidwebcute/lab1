import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxcalcrecordCreateComponent } from './taxcalcrecord-create.component';

describe('TaxcalcrecordCreateComponent', () => {
  let component: TaxcalcrecordCreateComponent;
  let fixture: ComponentFixture<TaxcalcrecordCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxcalcrecordCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxcalcrecordCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
