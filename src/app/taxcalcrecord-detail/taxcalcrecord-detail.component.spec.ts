import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxcalcrecordDetailComponent } from './taxcalcrecord-detail.component';

describe('TaxcalcrecordDetailComponent', () => {
  let component: TaxcalcrecordDetailComponent;
  let fixture: ComponentFixture<TaxcalcrecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxcalcrecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxcalcrecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
