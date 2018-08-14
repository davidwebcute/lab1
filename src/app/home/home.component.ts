import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../authentication.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(public auth: AuthenticationService) {}
}
