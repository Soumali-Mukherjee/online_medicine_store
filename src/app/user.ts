export class User
{
   constructor(public username:string,public password:string,public firstName:string,public lastName:string,public emailId:string,public mobileNo:number)
   {
        this.username = username;  this.password = password;    this.firstName = firstName;
        this.lastName = lastName;  this.emailId = emailId;  this.mobileNo = mobileNo; 
   }
}