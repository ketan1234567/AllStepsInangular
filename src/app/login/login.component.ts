import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  AllDataVal(username:any,passwod:any){
  //console.log(username,passwod);
  if(username=="ketan" && passwod=="ketan@123"){
    localStorage.setItem("isLogin","true");
  }else{
    localStorage.setItem("isLogin","false");
  }
  }
}
