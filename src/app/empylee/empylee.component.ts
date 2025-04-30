import { Component, OnInit } from '@angular/core';
import { AuthSalesService } from '../auth-sales.service';

@Component({
  selector: 'app-empylee',
  templateUrl: './empylee.component.html',
  styleUrls: ['./empylee.component.css']
})
export class EmpyleeComponent implements OnInit {
  idrestaurant:any;
  AllEmplyee:any;
  role=localStorage.getItem('role');
 
 
 constructor(private _AuthSalesService:AuthSalesService) {
  
 }
 ngOnInit(): void {
  this.idrestaurant=localStorage.getItem('IdRestaurant');

  this._AuthSalesService.GetEmplyee(this.idrestaurant).subscribe({
    next:(response)=>{
      console.log(response);
      this.AllEmplyee=response;
      this.role=localStorage.getItem('role')
      

    }
  })
   
 }
 DeleteEmplyee(gmail:any):void{
  this._AuthSalesService.DeleteEmplyee(gmail).subscribe({
    next:(response)=>{
      console.log(response);
      window.location.reload();
      

    }
  })

 }

 

}
