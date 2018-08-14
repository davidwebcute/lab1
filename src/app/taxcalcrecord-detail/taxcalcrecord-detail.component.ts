import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TaxcalculateService } from '../taxcalculate.service';

@Component({
  selector: 'app-taxcalcrecord-detail',
  templateUrl: './taxcalcrecord-detail.component.html',
  styleUrls: ['./taxcalcrecord-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaxcalcrecordDetailComponent implements OnInit {

  record = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private taxCalService : TaxcalculateService) { }

  ngOnInit() {
    this.getTaxcalcrecordDetail(this.route.snapshot.params['id']);
  }

  getTaxcalcrecordDetail(id) {
    // this.http.get('/api/taxcalcrecord/'+id).subscribe(data => {
    //   this.record = data;
    // });
    this.taxCalService.getTaxcalcrecordDetail(id).subscribe(data => {
      this.record = data;
    });
  }

}
