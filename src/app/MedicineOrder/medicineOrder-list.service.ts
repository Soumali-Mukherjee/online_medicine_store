import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Medicine } from "./medicine";
import { OrderTransaction } from "./orderTransaction";

@Injectable({ providedIn: 'root' })
export class MedicineOrderListService {
    public constructor(private httpClient: HttpClient) { }
    public getAllMedicines():Observable<Medicine[]>{
        return this.httpClient.get<Medicine[]>('http://localhost:8091');
    }
    public getMedicinesByBrand(brand:string):Observable<Medicine[]>{
        return this.httpClient.get<Medicine[]>('http://localhost:8091/findByBrand/'+brand);
    }
    public getMedicineByName(medicineName: string): Observable<Medicine> {
        return this.httpClient.get<Medicine>('http://localhost:8091/' + medicineName);
    }
    public getOrderTransactionByUserName(userName:string):Observable<OrderTransaction[]>{
        return this.httpClient.get<OrderTransaction[]>('http://localhost:8091/ordersbyusername/'+userName);
    }

    public addOrder(orderTransaction:OrderTransaction){
        return this.httpClient.post<OrderTransaction>('http://localhost:8091',orderTransaction);
    }
}