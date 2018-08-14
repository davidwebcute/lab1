import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { debug } from 'util';
import { AuthenticationService } from '../authentication.service';
import { TaxcalculateService } from '../taxcalculate.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { debounce } from 'rxjs/internal/operators/debounce';


@Component({
  selector: 'app-taxcalcrecord-create',
  templateUrl: './taxcalcrecord-create.component.html',
  styleUrls: ['./taxcalcrecord-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaxcalcrecordCreateComponent implements OnInit {

  record = { 'financial_year': 2018 };

  constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService, private taxCalService: TaxcalculateService) { }

  ngOnInit() {
    let email = this.auth.getUserDetails().email;
    this.record['user_email'] = email;
  }

  calSaveTaxcalcrecord() {

    this.calTax();
    this.saveTaxcalcrecord();
  }

  saveTaxcalcrecord() {

    this.taxCalService.saveTaxcalcrecords(this.record)
      .subscribe(res => {
        let id = res['_id'];
        //this.router.navigate(['/taxcalcrecord-details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

  calTax() {

    let tRateObj = this.taxCalService.getTaxRateMeta(this.record['financial_year']);

    if(tRateObj == undefined || tRateObj == null)
    {
        return;
    }
    
    if (this.record['is_include_super']) {
      this.record['superannuation'] = this.record['super_rate'] * this.record['annual_income'];
      this.record['gross_amount'] = this.record['annual_income'] - this.record['superannuation'];
    }
    else {
      this.record['superannuation'] = this.record['super_rate'] * this.record['annual_income'];
      this.record['gross_amount'] = this.record['annual_income'];
    }

    this.record['gross_super_amount'] = this.record['gross_amount'] * 1 + this.record['superannuation'];

    let taxableIncome = this.record['gross_amount'];
    let baseSubTotalTax = 0;
    let taxRateItemProjected = null;

    let txRates = tRateObj['txRates'].filter(rateInfo => taxableIncome <= rateInfo['max']);
    if(txRates.length > 0){ taxRateItemProjected = txRates[0];}

    if (taxRateItemProjected != null) {
      this.record['tax_amount'] = taxRateItemProjected.baseSubTotalTax + (taxableIncome - taxRateItemProjected.min) * taxRateItemProjected.rate;
      this.record['net_amount'] = taxableIncome - this.record['tax_amount'];
      this.record['net_super_amount'] = this.record['net_amount'] + this.record['superannuation'];

    }

  }


}
