import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './MedicineOrder/cartDetails.component';
import { MedicineOrderListComponent } from './MedicineOrder/medicineOrder-list.component';
import { PreviousOrderComponent } from './MedicineOrder/previousOrderDetails.component';

import { PatientDoctorAppointmentListComponent } from './PatientDoctorAppointment/patientDoctorAppointment-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'patientDoctorAppointment', component: PatientDoctorAppointmentListComponent },
  { path: 'home', component: MedicineOrderListComponent },
  { path: "cart", component: CartDetailsComponent },
  { path: "previousOrder", component: PreviousOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
