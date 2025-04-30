import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSalesService } from '../auth-sales.service';
import { AuthservicesService } from '../authservices.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
   constructor(private _AuthservicesService:AuthservicesService,private _Router:Router,private _AuthSalesService:AuthSalesService) {}
   TOTAL:any;
   subTotal:any;
  ngOnInit(): void {
    var RestauranyId=localStorage.getItem("IdRestaurant")
    this._AuthSalesService.GetSales(RestauranyId).subscribe({
      next:(Response)=>{
      
       
        
        this.TOTAL=Response;
        
        console.log(this.TOTAL);
      
        
        
  
      }
    })


  }
  
 

}
