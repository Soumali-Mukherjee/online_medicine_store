import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class PatientReview
{
    public constructor(public reviewId:string,public patient: Patient,public doctor:Doctor,public description:string,public rating:number){
        this.reviewId=reviewId;
        this.patient=patient;
        this.doctor=doctor;
        this.description=description;
        this.rating=rating;
        
    }
     
         
}