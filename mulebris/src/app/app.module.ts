import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GodmotherComponent } from './godmother/godmother.component';
import { GodmothersTimeComponent } from './components/godmothers-time/godmothers-time.component';
import { TimeGodmothersComponent } from './components/time-godmothers/time-godmothers.component';
import { ProfileGodmothersComponent } from './components/profile-godmothers/profile-godmothers.component';
import { RegisterGodmothersComponent } from './components/register-godmothers/register-godmothers.component';
import { DonationsComponent } from './components/donations/donations.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GodmotherComponent,
    GodmothersTimeComponent,
    TimeGodmothersComponent,
    ProfileGodmothersComponent,
    RegisterGodmothersComponent,
    DonationsComponent,
    PatientRegisterComponent,
    PatientProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
