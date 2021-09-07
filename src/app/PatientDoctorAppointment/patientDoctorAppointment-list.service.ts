import { Doctor } from "./doctor";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AppointmentScheduleDetails } from "./appointmentscheduledetails";
import { Patient } from "./patient";
import { PatientReview } from "./patientReview";
import { Time } from "@angular/common";


@Injectable({ providedIn: 'root' })
export class PatientDoctorAppointmentListService {
    public constructor(private httpClient: HttpClient) { }
    public getAllDoctors(): Observable<Doctor[]> {
        return this.httpClient.get<Doctor[]>('http://localhost:8090/doctors');
    }
    public getDoctorBySpecialization(specialization: string): Observable<Doctor[]> {
        return this.httpClient.get<Doctor[]>('http://localhost:8090/specialization/' + specialization);
    }
    public getDoctorByName(doctorname: string): Observable<Doctor[]> {
        return this.httpClient.get<Doctor[]>('http://localhost:8090/name/' + doctorname);
    }
    public getPatientReviewByPatientId(patientId: string): Observable<PatientReview> {
        return this.httpClient.get<PatientReview>('http://localhost:8090/reviewByPatient/' + patientId);
    }
    public getPatientReviewByDoctorId(doctorId: string): Observable<PatientReview> {
        return this.httpClient.get<PatientReview>('http://localhost:8090/reviewByDoctor/' + doctorId);
    }
    public viewAppointmentByPatientId(patientId: string): Observable<AppointmentScheduleDetails[]> {
        return this.httpClient.get<AppointmentScheduleDetails[]>('http://localhost:8090/viewAppointment/' + patientId);
    }
    public getPatientById(patientId: string): Observable<Patient> {
        return this.httpClient.get<Patient>('http://localhost:8090/patientId/' + patientId);
    }
    public cancelAppointment(scheduleID: string, patientId: string, doctorId: string, apointmentDate: Date, appointmentTime: string, status: string) : Observable<any>{
        return this.httpClient.put<AppointmentScheduleDetails>('http://localhost:8090/cancel', { "scheduleId": scheduleID, "patientId": patientId, "doctorId": doctorId, "appointmentDate": apointmentDate, "appointmentTime": appointmentTime, "status": status });
    }

    public fixPatientAppointment(appointmentscheduledetails:AppointmentScheduleDetails): Observable<any>{
        return this.httpClient.post<AppointmentScheduleDetails>('http://localhost:8090/',appointmentscheduledetails);
    }
    public modifyPatient(modifyPatientId:string,modifyPatientPassword:string,modifyPatientmobileNo:string,modifyPatientemailId:string): Observable<any>{
        return this.httpClient.put<Patient>('http://localhost:8090/modifyPatient',{"patientId":modifyPatientId,"patientPassword":modifyPatientPassword,"mobileNo":modifyPatientmobileNo,"emailId":modifyPatientemailId})
    }
    public addPatientReview(patientReview:PatientReview): Observable<any>{
        return this.httpClient.put<PatientReview>('http://localhost:8090/addReview',patientReview);
    }
    public modifyAppointment(modifyscheduleID:string,modifyapointmentDate:Date,modifyappointmentTime:string): Observable<any>{
        return this.httpClient.put<AppointmentScheduleDetails>('http://localhost:8090/',{"scheduleId": modifyscheduleID, "appointmentDate": modifyapointmentDate, "appointmentTime": modifyappointmentTime })
    }
}