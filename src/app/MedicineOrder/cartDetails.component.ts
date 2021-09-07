import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Globals } from "../globals";
import { Address } from "./address";
import { MedicineOrderListService } from "./medicineOrder-list.service";
import { OrderedMedicineDetails } from "./orderedMedicineDetails";
import { OrderTransaction } from "./orderTransaction";
//import * as $ from 'jquery';
@Component({
    selector: 'cart',
    templateUrl: './cartDetails.component.html'
})
export class CartDetailsComponent implements OnInit {
    cartDetails: OrderedMedicineDetails[] = [];
    orderId: string = "";
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private medicineOrderListService: MedicineOrderListService,private orders:Globals) {
        const myArray = this.activatedRoute.snapshot.queryParamMap.get('myArray');
        if (myArray != null) {
            this.cartDetails = JSON.parse(myArray);
            this.orderId = this.cartDetails[0].orderId;
        }
    }
    ngOnInit() {

    }
    public addOrder(addressId: string, houseNo: string, street: string, city: string, state: string, pincode: string, country: string): void {        
        debugger;
        var userName = this.orders.userName;
        var orderDate = new Date();
        var orderTime = (orderDate.getHours()<10 ? "0"+orderDate.getHours():orderDate.getHours() ) + ":" + (orderDate.getMinutes()<10 ? "0"+orderDate.getMinutes():orderDate.getMinutes() );
        var billAmount = 0;
        for(let i=0;i<this.cartDetails.length;i++){
            billAmount+=this.cartDetails[i].price;
        }
        var paymentMode = "COD";
        this.medicineOrderListService.addOrder(new OrderTransaction(this.orderId, userName, new Date(orderDate), orderTime, billAmount, paymentMode, new Address(parseInt(addressId), houseNo, street, city, state, parseInt(pincode), country), this.cartDetails)).subscribe();
        window.open("http://localhost:4200/home","_self");
    }
}