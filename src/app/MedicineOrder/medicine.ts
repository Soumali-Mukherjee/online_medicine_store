export class Medicine {
    public constructor(public medicineName: string, public type: string, public mfgCompany: string, public mfgDate: Date, public expDate: Date, public price: number, public unit: number, public prescriptionRequired: string,public description:string) {
        this.medicineName=medicineName;
        this.type=type;
        this.mfgCompany=mfgCompany;
        this.mfgDate=mfgDate;
        this.expDate=expDate;
        this.price=price;
        this.unit=unit;
        this.prescriptionRequired=prescriptionRequired;
        this.description=description;
    }
}