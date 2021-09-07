import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PatientDoctorAppointmentListComponent } from "./patientDoctorAppointment-list.component";
import { PatientDoctorAppointmentListService } from "./patientDoctorAppointment-list.service";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [PatientDoctorAppointmentListComponent],
    imports: [CommonModule, HttpClientModule],
    providers: [PatientDoctorAppointmentListService],
    exports: [PatientDoctorAppointmentListComponent]
})
export class PatientDoctorAppointmentModule {

}