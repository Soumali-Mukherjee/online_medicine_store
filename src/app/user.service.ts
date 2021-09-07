import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn:'root'
})
export class UserService
{

    constructor(private httpClient:HttpClient){}
    public authenticateUser(username:string,password:string) : Observable<any>
    {
         return this.httpClient.get<any>('http://localhost:8089/username/'+username+'/password/'+password);  
    }

    public registerUser(user:User) : Observable<any>
    {
         return this.httpClient.post<any>('http://localhost:8089',user);
    }

}