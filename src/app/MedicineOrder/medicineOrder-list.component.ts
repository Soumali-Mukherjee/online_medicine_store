import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { Globals } from "../globals";
import { Address } from "./address";
import { Medicine } from "./medicine";
import { MedicineOrderListService } from "./medicineOrder-list.service";
import { OrderedMedicineDetails } from "./orderedMedicineDetails";
import { OrderTransaction } from "./orderTransaction";

@Component({
    'selector': 'medicineOrder',
    'templateUrl': './medicineOrder-list.component.html',
    styleUrls: ['./medicineOrder-list.component.css']
})
export class MedicineOrderListComponent implements OnInit {
    medicineList: Medicine[] = [];
    orderTransactionList: OrderTransaction[] = [];
    orderedMedicinesArray: Globals;
    medicine: Medicine = new Medicine("", "", "", new Date(), new Date(), 0, 0, "", "");
    orderId: string = "OR" + this.uuid();
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private medicineOrderListService: MedicineOrderListService, orderedMedicinesArray: Globals) {
        this.orderedMedicinesArray = orderedMedicinesArray;
    }

    ngOnInit() {
        const cartElement = document.getElementById("cartHtml");
        this.medicineOrderListService.getAllMedicines().subscribe(data => {
            this.medicineList = data;
            const mDiv = document.getElementById("medicineDetails");
            if (this.medicine.medicineName == "") {
                if (mDiv != null) {
                    mDiv.style.display = "none";
                }
            }
            else {
                if (mDiv != null) {
                    mDiv.style.display = "flex";
                }
            }
        });
    }
    public getMedicineByBrandOrName(brand: string): void {
        this.medicineOrderListService.getMedicinesByBrand(brand).subscribe(data => {
            if (data.length != 0) {
                this.medicineList = data;
            }
            else {
                this.getMedicineByName(brand);
            }
        });
    }
    public getMedicineByName(medicineName: string): void {
        this.medicineOrderListService.getMedicineByName(medicineName).subscribe(data => {
            this.medicineList = [];
            this.medicine = data;
            const mDiv = document.getElementById("medicineDetails");
            if (this.medicine.medicineName == "") {
                if (mDiv != null) {
                    mDiv.style.display = "none";
                }
            }
            else {
                if (mDiv != null) {
                    mDiv.style.display = "flex";
                }
            }
        });
    }

    public addMedicine(medicineName: string, type: string, mfgCompany: string, mfgDate: Date, expDate: Date, medicinePrice: number, unit: number, prescriptionRequired: string, description: string, indexOfelement: string): void {
        var quantityDiv = document.getElementById('qty' + indexOfelement) as HTMLInputElement;
        if (quantityDiv != null) {
            var quantity = quantityDiv.value;
            var price = medicinePrice * parseInt(quantity);
            this.orderedMedicinesArray.orderedMedicineArray.push(new OrderedMedicineDetails(new Date().getTime(), this.orderId, new Medicine(medicineName, type, mfgCompany, new Date(mfgDate), new Date(expDate), medicinePrice, unit, prescriptionRequired, description), parseInt(quantity), price));
            var cart = document.getElementById("cartDetails");
            if (cart != null) {
                cart.innerHTML = this.orderedMedicinesArray.orderedMedicineArray.length.toString();
            }
            //debugger;
        }
    }
    public uuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    public increment(indexOfelement: number) {
        var quantityDiv = document.getElementById('qty' + indexOfelement) as HTMLInputElement;
        if (quantityDiv != null) {
            quantityDiv.stepUp(1);
        }
    }
    public decrement(indexOfelement: number) {
        var quantityDiv = document.getElementById('qty' + indexOfelement) as HTMLInputElement;
        if (quantityDiv != null) {
            quantityDiv.stepDown(1);
        }
    }
    public viewCart() {
        const user = document.getElementById("userName");
        if (user != null) {
            if (user.innerHTML != "") {
                const queryParams: any = {};
                queryParams.myArray = JSON.stringify(this.orderedMedicinesArray.orderedMedicineArray);
                //debugger;
                const navigationExtras: NavigationExtras = {
                    queryParams
                };
                this.router.navigate(['cart'], navigationExtras);
            }
            else{
                alert("Please login first!");
            }
        }
    }

}