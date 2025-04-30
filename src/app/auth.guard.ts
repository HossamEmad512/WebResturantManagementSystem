import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('eToken')!=null){
    return true;
  }else{
    return false;
  }
 
};
