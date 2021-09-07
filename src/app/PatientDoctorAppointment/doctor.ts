export class Doctor {
    public constructor(public doctorId: string, public doctorname: string, public mobileNo: number, public gender: string, public emailId: string, public qualification: string, public specialization: string, public fees: number, public experience: number) {
        this.doctorId = doctorId;
        this.doctorname = doctorname;
        this.mobileNo = mobileNo;
        this.gender = gender;
        this.emailId = emailId;
        this.qualification = qualification;
        this.specialization = specialization;
        this.fees = fees;
        this.experience = experience;
    }
}