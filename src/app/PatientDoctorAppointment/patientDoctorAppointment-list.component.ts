
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppointmentScheduleDetails } from "./appointmentscheduledetails";
import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { PatientDoctorAppointmentListService } from "./patientDoctorAppointment-list.service";
import { PatientReview } from "./patientReview";

@Component({
    selector: 'doctorList',
    templateUrl: './patientDoctorAppointment-list.component.html'
})
export class PatientDoctorAppointmentListComponent implements OnInit {
    addReviewmodalStyle: string = "none";
    fixAppModalStyle: string = "none";
    getPatientReviewmodalStyle: string = "none";
    getDoctorReviewmodalStyle: string = "none";
    viewAppointmentmodalStyle: string = "none";
    modifyAppointmentmodalStyle: string = "none";
    getPatientDetailmodalStyle: string = "none";
    modifyPatientmodalStyle: string = "none";
    modifyAppointmentPatientID: string = "";
    doctorList: Doctor[] = [];
    fixDoctor: Doctor = new Doctor("", "", 0, "", "", "", "", 0, 0);
    addReviewDoctor: Doctor = new Doctor("", "", 0, "", "", "", "", 0, 0);
    patientReviewByPatientId: PatientReview = new PatientReview("", new Patient("", "", "", 0, "", 0, ""), new Doctor("", "", 0, "", "", "", "", 0, 0), "", 0);
    patientReviewByDoctorId: PatientReview = new PatientReview("", new Patient("", "", "", 0, "", 0, ""), new Doctor("", "", 0, "", "", "", "", 0, 0), "", 0);
    appointmentscheduledetailsList: AppointmentScheduleDetails[] = [];
    patient: Patient = new Patient("", "", "", 0, "", 0, "");
    appointmentScheduleDetails: AppointmentScheduleDetails = new AppointmentScheduleDetails("", new Patient("", "", "", 0, "", 0, ""), new Doctor("", "", 0, "", "", "", "", 0, 0), new Date(), "", "");
    public constructor(private activatedRoute: ActivatedRoute, private router: Router, private patientDoctorAppointmentListService: PatientDoctorAppointmentListService) {
    }
    ngOnInit() {
        this.patientDoctorAppointmentListService.getAllDoctors().subscribe(data => {
            this.doctorList = data;
        });

        const tableElement = document.getElementById("reviewTablePatientID");
        const tableElement2 = document.getElementById("reviewTableByDoctorID");
        const tableElement3 = document.getElementById("patientDetailsTable");
        if (this.patientReviewByPatientId.patient.patientId == "") {
            if (tableElement != null && tableElement2 != null && tableElement3 != null) {
                tableElement.style.display = "none";
                tableElement2.style.display = "none";
                tableElement3.style.display = "none";
            }
        }
        else {
            if (tableElement != null && tableElement2 != null && tableElement3 != null) {
                tableElement.style.display = "flex";
                tableElement2.style.display = "flex";
                tableElement3.style.display = "flex";
            }
        }
    }
    openFixAppModal(doctorId: string, doctorName: string, doctorMobileNo: number, doctorGender: string, doctorEmailId: string, doctorQualification: string, doctorSpecialization: string, doctorFees: number, doctorExperience: number) {
        this.fixAppModalStyle = "block";
        this.fixDoctor = new Doctor(doctorId, doctorName, doctorMobileNo, doctorGender, doctorEmailId, doctorQualification, doctorSpecialization, doctorFees, doctorExperience);
    }
    closeFixAppModal() {
        this.fixAppModalStyle = "none";
    }
    openAddReviewModal(doctorId: string, doctorName: string, doctorMobileNo: number, doctorGender: string, doctorEmailId: string, doctorQualification: string, doctorSpecialization: string, doctorFees: number, doctorExperience: number) {
        this.addReviewmodalStyle = "block";
        this.addReviewDoctor = new Doctor(doctorId, doctorName, doctorMobileNo, doctorGender, doctorEmailId, doctorQualification, doctorSpecialization, doctorFees, doctorExperience);
    }
    closeAddReviewModal() {
        this.addReviewmodalStyle = "none";
    }
    openPatientReviewModal() {
        this.getPatientReviewmodalStyle = "block";
    }
    openDoctorReviewModal() {
        this.getDoctorReviewmodalStyle = "block";
    }
    openviewAppointmentModal() {
        this.viewAppointmentmodalStyle = "block";
    }
    openPatientDetailModal() {
        this.getPatientDetailmodalStyle = "block";
    }
    openModifyAppointmentModal(patientId: string) {
        this.modifyAppointmentPatientID = patientId;
        this.modifyAppointmentmodalStyle = "block";
    }
    openModifyPatientModal() {
        this.modifyPatientmodalStyle = "block";
    }

    closePatientReviewModal() {
        this.getPatientReviewmodalStyle = "none";
    }
    closeDoctorReviewModal() {
        this.getDoctorReviewmodalStyle = "none";
    }
    closeviewAppointmentModal() {
        this.viewAppointmentmodalStyle = "none";
    }
    closePatientDetailModal() {
        this.getPatientDetailmodalStyle = "none";
    }
    closeModifyAppointmentModal() {
        this.modifyAppointmentmodalStyle = "none";
    }
    closeModifyPatientModal() {
        this.modifyPatientmodalStyle = "none";
    }
    public getPatientReviewByDoctorId(doctorId: string): void {
        this.patientDoctorAppointmentListService.getPatientReviewByDoctorId(doctorId).subscribe(data => {
            this.patientReviewByDoctorId = data;
            const tableElement2 = document.getElementById("reviewTableByDoctorID");
            if (this.patientReviewByDoctorId.patient.patientId == "") {
                if (tableElement2 != null) {
                    tableElement2.style.display = "none";
                }
            }
            else {
                if (tableElement2 != null) {
                    tableElement2.style.display = "flex";
                }
            }
        });
    }
    public getPatientReviewByPatientId(patientId: string): void {
        this.patientDoctorAppointmentListService.getPatientReviewByPatientId(patientId).subscribe(data => {
            this.patientReviewByPatientId = data;
            const tableElement = document.getElementById("reviewTablePatientID");
            if (this.patientReviewByPatientId.patient.patientId == "") {
                if (tableElement != null) {
                    tableElement.style.display = "none";

                }
            }
            else {
                if (tableElement != null) {
                    tableElement.style.display = "flex";

                }
            }
        });
    }
    public getDoctorBySpecializationOrName(specialization: string): void {
        this.patientDoctorAppointmentListService.getDoctorBySpecialization(specialization).subscribe(data => {
            if (data.length != 0) {
                this.doctorList = data;
            }
            else {
                this.getDoctorByName(specialization);
            }
        });
    }
    public getDoctorByName(specialization: string): void {
        this.patientDoctorAppointmentListService.getDoctorByName(specialization).subscribe(data => {
            this.doctorList = data;
        });
    }
    public viewAppointmentByPatientId(patientId: string): void {
        this.patientDoctorAppointmentListService.viewAppointmentByPatientId(patientId).subscribe(
            data => {
                this.appointmentscheduledetailsList = data;
            });
    }
    public getPatientById(patientId: string): void {
        this.patientDoctorAppointmentListService.getPatientById(patientId).subscribe(data => {
            this.patient = data;
            const tableElement3 = document.getElementById("patientDetailsTable");
            if (this.patient.patientId == "") {
                if (tableElement3 != null) {
                    tableElement3.style.display = "none";
                }
            }
            else {
                if (tableElement3 != null) {
                    tableElement3.style.display = "flex";
                }
            }
        });
    }
    public cancelAppointment(scheduleID: string, patientId: string, doctorId: string, appointmentDate: Date, appointmentTime: string, status: string): void {
        this.patientDoctorAppointmentListService.cancelAppointment(scheduleID, patientId, doctorId, appointmentDate, appointmentTime, status).subscribe((response) => {
            if (response == "OK") {
                alert("Appointment cancelled!");
                this.viewAppointmentByPatientId(patientId);
            }
        });
    }
    public fixPatientAppointment(patientName: string, patientPassword: string, patientAge: string, patientGender: string, patientmobileNo: string, patientemailId: string, appointmentDate: string, appointmentTime: string): void {
        var patientId = "P" + new Date().getTime();
        var appointmentId = "App" + this.uuid();
        this.patientDoctorAppointmentListService.fixPatientAppointment(new AppointmentScheduleDetails(appointmentId, new Patient(patientId, patientName, patientPassword, parseInt(patientAge), patientGender, parseInt(patientmobileNo), patientemailId), this.fixDoctor, new Date(appointmentDate), appointmentTime, "P")).subscribe((response) => {
            if (response == "OK") {
                alert("Appointment created successfully with Appointment ID as " + appointmentId + " and Patient ID as: " + patientId);
                this.closeFixAppModal();
            }
        });
    }
    public modifyPatient(modifyPatientId: string, modifyPatientPassword: string, modifyPatientmobileNo: string, modifyPatientemailId: string): void {
        this.patientDoctorAppointmentListService.modifyPatient(modifyPatientId, modifyPatientPassword, modifyPatientmobileNo, modifyPatientemailId).subscribe((response) => {
            if (response == "OK") {
                alert("Patient Modified!");
                this.closeModifyPatientModal();
                this.getPatientById(modifyPatientId);
            }
        });
    }
    public addPatientReview(reviewId: string, patientId: string, patientName: string, patientPassword: string, patientAge: string, patientGender: string, patientmobileNo: string, patientemailId: string, reviewDescription: string, reviewRating: string): void {
        this.patientDoctorAppointmentListService.addPatientReview(new PatientReview(reviewId, new Patient(patientId, patientName, patientPassword, parseInt(patientAge), patientGender, parseInt(patientmobileNo), patientemailId), this.addReviewDoctor, reviewDescription, parseFloat(reviewRating))).subscribe((response) => {
            if (response == "OK") {
                alert("Review added successfully!");
                this.closeAddReviewModal();
            }
        });
    }
    public modifyAppointment(modifyscheduleID: string, modifyappointmentDate: string, modifyappointmentTime: string): void {
        this.patientDoctorAppointmentListService.modifyAppointment(modifyscheduleID, new Date(modifyappointmentDate), modifyappointmentTime).subscribe((response) => {
            if (response == "OK") {
                alert("Appointment Modified!");
                this.closeModifyAppointmentModal();
                this.viewAppointmentByPatientId(this.modifyAppointmentPatientID);
            }
        });
    }
    public uuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}