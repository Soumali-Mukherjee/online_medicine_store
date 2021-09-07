import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MedicineOrderListComponent } from "./medicineOrder-list.component";
import { MedicineOrderListService } from "./medicineOrder-list.service";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CartDetailsComponent } from "./cartDetails.component";
import { PreviousOrderComponent } from "./previousOrderDetails.component";
@NgModule({
    declarations: [MedicineOrderListComponent,CartDetailsComponent,PreviousOrderComponent],
    imports: [BrowserModule,CommonModule, HttpClientModule],
    providers: [MedicineOrderListService],
    exports: [MedicineOrderListComponent,CartDetailsComponent,PreviousOrderComponent]
})
export class MedicineOrderModule {

}