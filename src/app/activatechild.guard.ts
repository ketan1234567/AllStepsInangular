import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const activatechildGuard: CanActivateFn = (route, state) => {

  let _router=inject(Router)

  let data=localStorage.getItem("isLogin")
  if(data=="false"){
   _router.navigate(['login'])
   alert("Due to rights access, redirecting to login page !!");
   return false;
  }
  return true;
};
