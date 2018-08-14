import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { TaxcalculateService } from './taxcalculate.service';

import { TaxcalcrecordComponent } from './taxcalcrecord/taxcalcrecord.component';
import { TaxcalcrecordDetailComponent } from './taxcalcrecord-detail/taxcalcrecord-detail.component';
import { TaxcalcrecordCreateComponent } from './taxcalcrecord-create/taxcalcrecord-create.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  {
    path: 'taxcalcrecords',
    component: TaxcalcrecordComponent,
    data: { title: 'Taxc calc record List' }
  },
  {
    path: 'taxcalcrecord-details/:id',
    component: TaxcalcrecordDetailComponent,
    data: { title: 'Tax calc record Details' }
  },
  {
    path: 'taxcalcrecord-create',
    component: TaxcalcrecordCreateComponent,
    data: { title: 'Create Tax calc record' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TaxcalcrecordComponent,
    TaxcalcrecordDetailComponent,
	  TaxcalcrecordCreateComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    HttpClientModule,
	  RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthenticationService, 
    AuthGuardService,
    TaxcalculateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
