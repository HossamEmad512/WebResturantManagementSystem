import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../authservices.service';
import { Router, RouteReuseStrategy } from '@angular/router';
import { AuthSalesService } from '../auth-sales.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  /**
   *
   */
  AllOrders:any;
  TotalAllorders:any;
   x:any;
   role=localStorage.getItem('role')
   
 
   TableNumber:any;
   
  
  
 
  constructor(private _AuthservicesService:AuthservicesService,private _Router:Router,private _AuthSalesService:AuthSalesService) {}
  ngOnInit(): void {
    var RestauranyId=localStorage.getItem("IdRestaurant")
    
    
    this._AuthservicesService.getOrders(RestauranyId).subscribe({
      next:(response)=>{
        console.log('ttttttt',response);
        
        
        this.TotalAllorders=response
        this.AllOrders=response[0].orderItems
        console.log('dddd',this.AllOrders);
      
       
        
        console.log('errr',this.TotalAllorders[0].orderItems);
        
       

      }
      
    })
  }
 
  
  Getsum(Array:any){
    let sum=0;
    for (let index = 0; index < Array.length; index++) {
      sum+=Array[index].item.price*Array[index].quantity

      
    }
    return sum;
    

  }
 
Delet(DATA:any):void{
  this._AuthservicesService.Deleteorder(DATA).subscribe({
    next:(Response)=>{
      console.log(Response);
      window.location.reload();
      
      
    }

  })
 
}



creatsales(Data:any , id:any):void{
  console.log('qwe',Data);
   
var  orderItems :any = [];
  
for (let index = 0; index < Data.orderItems.length; index++) {
 
 var Item= { item: { name: Data.orderItems[index].item.name, cost:Data.orderItems[index].item.cost, price: Data.orderItems[index].item.price }, quantity:Data.orderItems[index].quantity};
 orderItems.push(Item);

 
}

var RestauranyId=localStorage.getItem("IdRestaurant")
let compostedObject={
  resturantId:RestauranyId,
  orderItems:orderItems,
  

}
console.log('poiu',compostedObject);


this._AuthSalesService.CreatSales(compostedObject).subscribe({
  next:(Response)=>{
    console.log('Salll',Response);
    this._AuthservicesService.Deleteorder(id).subscribe({
      next:(Response)=>{
        console.log(Response);
        window.location.reload();
        
        
      }
  
    })
    

  
   


    
  }

})
  


}




 

   
}


