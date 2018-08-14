import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../authentication.service';
import { TaxcalculateService } from '../taxcalculate.service';

@Component({
  selector: 'app-taxcalcrecord',
  templateUrl: './taxcalcrecord.component.html',
  styleUrls: ['./taxcalcrecord.component.css']
})
export class TaxcalcrecordComponent implements OnInit {

  taxCalcRecords: any;
  
  constructor(private http: HttpClient, private auth: AuthenticationService, private taxCalService : TaxcalculateService) { }

  ngOnInit() {
	  // this.http.get('/api/taxcalcrecords').subscribe(data => {
    //   this.taxCalcRecords = data;
    // });
    let email = this.auth.getUserDetails().email;
    this.taxCalService.getTaxcalcrecordsByEmail(email).subscribe(data => {
      this.taxCalcRecords = data;
    });
  }

}
