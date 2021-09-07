export class Patient {
    public constructor(public patientId: string, public patientName: string, public patientPassword: string, public patientAge: number, public gender: string, public mobileNo: number, public emailId: string) {
      this.patientId = patientId;
      this.patientName = patientName;
      this.patientPassword = patientPassword;
      this.patientAge = patientAge;
      this.gender = gender;
      this.mobileNo = mobileNo;
      this.emailId = emailId;
  
    }
  }