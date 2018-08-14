import { TestBed, inject } from '@angular/core/testing';

import { TaxcalculateService } from './taxcalculate.service';

describe('TaxcalculateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaxcalculateService]
    });
  });

  it('should be created', inject([TaxcalculateService], (service: TaxcalculateService) => {
    expect(service).toBeTruthy();
  }));
});
