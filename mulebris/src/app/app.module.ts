import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimeGodmothersComponent } from './components/time-godmothers/time-godmothers.component';
import { ProfileGodmothersComponent } from './components/profile-godmothers/profile-godmothers.component';
import { RegisterGodmothersComponent } from './components/register-godmothers/register-godmothers.component';
import { DonationsComponent } from './components/donations/donations.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';

import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registergodmothers',
    component: RegisterGodmothersComponent
  },
  {
    path: 'donations',
    component: DonationsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeGodmothersComponent,
    ProfileGodmothersComponent,
    RegisterGodmothersComponent,
    DonationsComponent,
    PatientRegisterComponent,
    PatientProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
