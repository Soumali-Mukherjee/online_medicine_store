import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';


@Component({
   selector:'app-root',
   templateUrl:`./app.component.html`,
   styleUrls:['./app.component.css']
})
export class AppComponent
{
   loginModalStyle="none";
   regModalStyle="none";
   constructor(private userService:UserService){ }
   regUserStatus:string="";
   loginUserStatus:string="";
   openLoginModal()
   {
       this.loginModalStyle="block";
   }
  closeLoginModal()
   {
       this.loginModalStyle="none";
   }
   openUserRegModal()
   {
       this.regModalStyle="block";
   }
   closeUserRegModal()
   {
       this.regModalStyle="none";
   }
   userLogin(username:string,password:string) : void
   { 
       this.loginModalStyle="none";
       this.userService.authenticateUser(username,password).subscribe((response)=>console.log(response));  
   }
   
   registerUser(uid:string,pwd:string,fname:string,lname:string,mobile:string,email:string)
   {
       this.regModalStyle="none"; 
       let user:User = new User(uid,pwd,fname,lname,email,parseInt(mobile));
       this.userService.registerUser(user).subscribe((response)=>this.regUserStatus=response);
   }
}



