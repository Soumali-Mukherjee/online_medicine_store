import { Injectable } from '@angular/core';
import { OrderedMedicineDetails } from './MedicineOrder/orderedMedicineDetails';

@Injectable()
export class Globals {
    orderedMedicineArray:OrderedMedicineDetails[] = [];
    userName:string="";
}