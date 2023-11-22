import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router)
  let data =localStorage.getItem("isLogin")

  if(data=="false"){
 alert("Not Aunticate user")
 console.log("error error");
 _router.navigate(['login'])
 return false;
  }
  return true;
};
 