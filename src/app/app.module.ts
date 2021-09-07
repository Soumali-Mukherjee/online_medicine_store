import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicineOrderModule } from './MedicineOrder/medicineOrder.module';
import { PatientDoctorAppointmentModule } from './PatientDoctorAppointment/patientDoctorAppointment.module';
import { Globals } from './globals';
import { UserService } from './user.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientDoctorAppointmentModule,
    MedicineOrderModule
  ],
  providers: [Globals,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
