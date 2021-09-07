export class Address{
    public constructor(public addressId:number,public houseNo:string,public street:string,public city:string,public state:string,public pincode:number,public country:string){
        this.addressId=addressId;
        this.houseNo=houseNo;
        this.street=street;
        this.city=city;
        this.pincode=pincode;
        this.state=state;
        this.country=country;
    }
}