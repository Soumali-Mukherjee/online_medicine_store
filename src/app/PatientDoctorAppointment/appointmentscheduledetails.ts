import { Patient } from './patient';
import { Doctor } from './doctor';

export class AppointmentScheduleDetails {
  public constructor(public scheduleId: string, public patient: Patient, public doctor: Doctor, public appointmentDate: Date, public appointmentTime: string, public status: string) {
    this.scheduleId = scheduleId;
    this.patient = patient;
    this.doctor = doctor;
    this.appointmentDate = appointmentDate;
    this.appointmentTime = appointmentTime;
    this.status = status;
  }
}
