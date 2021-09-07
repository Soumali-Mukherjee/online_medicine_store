import { Address } from "./address";
import { OrderedMedicineDetails } from "./orderedMedicineDetails";

export class OrderTransaction {
    public constructor(public orderId: string, public userName: string, public orderDate: Date, public orderTime: string, public billAmount: number, public paymentMode: string, public address: Address, public orderedMedicines: OrderedMedicineDetails[]) {
        this.orderId = orderId;
        this.userName = userName;
        this.orderDate = orderDate;
        this.orderTime = orderTime;
        this.billAmount = billAmount;
        this.paymentMode = paymentMode;
        this.address = address;
        this.orderedMedicines = orderedMedicines;
    }
}