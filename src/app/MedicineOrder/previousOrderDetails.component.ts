import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Globals } from "../globals";
import { MedicineOrderListService } from "./medicineOrder-list.service";
import { OrderTransaction } from "./orderTransaction";

@Component({
    'selector' :'previousOrder',
    'templateUrl' : './previousOrderDetails.component.html'
})

export class PreviousOrderComponent implements OnInit{
    orderTransactionList:OrderTransaction[]=[];
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private medicineOrderListService: MedicineOrderListService,private orders:Globals) {
    }
    ngOnInit(){
        this.getOrderTransactionsByUserName(this.orders.userName);
    }
    public getOrderTransactionsByUserName(userName: string): void {
        this.medicineOrderListService.getOrderTransactionByUserName(userName).subscribe(data => {
            this.orderTransactionList = data;
        })
    }
}