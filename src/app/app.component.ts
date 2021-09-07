import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Globals } from './globals';
import { MedicineOrderListComponent } from './MedicineOrder/medicineOrder-list.component';
import { MedicineOrderListService } from './MedicineOrder/medicineOrder-list.service';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onlinemedicinestore';
  medicineOrderComponent: MedicineOrderListComponent;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, medicineOrderListService: MedicineOrderListService, public orders: Globals, private userService: UserService) {
    this.medicineOrderComponent = new MedicineOrderListComponent(activatedRoute, router, medicineOrderListService, orders);
  }
  ngOnInit() { }
  loginModalStyle: string = "none";
  regModalStyle: string = "none";
  regUserStatus: string = "";
  loginUserStatus: string = "";
  openLoginModal() {
    this.loginModalStyle = "block";
  }
  closeLoginModal() {
    this.loginModalStyle = "none";
  }
  openUserRegModal() {
    this.regModalStyle = "block";
  }
  closeUserRegModal() {
    this.regModalStyle = "none";
  }
  userLogin(username: string, password: string): void {
    this.loginModalStyle = "none";
    this.userService.authenticateUser(username, password).subscribe((response) => {
      console.log(response);
      //debugger;
      if (response == "OK") {
        this.orders.userName = username;
        const user = document.getElementById("userName");
        if(user!=null){
          user.innerHTML = username;
        }
      }
    });
  }
  registerUser(uid: string, pwd: string, fname: string, lname: string, mobile: string, email: string) {
    this.regModalStyle = "none";
    let user: User = new User(uid, pwd, fname, lname, email, parseInt(mobile));
    this.userService.registerUser(user).subscribe((response) => this.regUserStatus = response);
  }
  navigateTo(){
    this.router.navigate(['patientDoctorAppointment']);
  }
  openCart(){
    this.medicineOrderComponent.viewCart();
  }
  openPreviousOrder(){
    this.router.navigate(['previousOrder']);
  }
}
