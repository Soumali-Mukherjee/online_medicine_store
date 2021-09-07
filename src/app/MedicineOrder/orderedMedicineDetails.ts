import { Medicine } from "./medicine";

export class OrderedMedicineDetails{
    public constructor(public id:number,public orderId:string,public medicine:Medicine,public quantity:number,public price:number){
        this.id=id;
        this.orderId=orderId;
        this.medicine=medicine;
        this.quantity=quantity;
        this.price=this.price;        
    }
}