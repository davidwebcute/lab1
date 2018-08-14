import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class TaxcalculateService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService) {

  }

  public getTaxcalcrecordsByEmail(email): Observable<any> {
    return this.http.get('/api/taxcalcrecordsbyemail/' + email, { headers: { Authorization: `Bearer ${this.authService.getToken()}` } });
  }

  public getTaxcalcrecords(): Observable<any> {
    return this.http.get('/api/taxcalcrecords', { headers: { Authorization: `Bearer ${this.authService.getToken()}` } });
  }

  public saveTaxcalcrecords(record): Observable<any> {
    return this.http.post('/api/taxcalcrecord', record, { headers: { Authorization: `Bearer ${this.authService.getToken()}` } });
  }

  public getTaxcalcrecordDetail(id): Observable<any> {
    return this.http.get('/api/taxcalcrecord/' + id, { headers: { Authorization: `Bearer ${this.authService.getToken()}` } });
  }

  //TO be moved to separated service
  public getTaxRateMeta(fyear) {
    let txRateData = require('../../api/json_data/taxrates.json');
    if (txRateData) {
      let rds = txRateData.filter(rd => fyear == rd.fyear);
      if(rds.length > 0){ return rds[0];}
    }
    return null;
  }


}
