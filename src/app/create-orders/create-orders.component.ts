import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../authservices.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {
  isFormVisible = false; 
  CreateAllOrders:any;
  getmenueid:any;
  Allmenus:any;
  OrderItem:any;
  GetQuantity:any;
 
  orderItems :any = [];
  idrestaurant:any=localStorage.getItem('IdRestaurant');
  formGeroup:FormGroup=new FormGroup({
    tableNumber:new FormControl('',[Validators.required])
  })// متغير للتحكم في ظهور النموذج
  name = '';
  email = '';

  
  /**
   *
   */
 


  
  constructor(private _AuthservicesService:AuthservicesService,private _Router:Router) {
 
  
    
  }
  ngOnInit(): void {
    this.getmenueid=localStorage.getItem('IdRestaurant');
    this._AuthservicesService.Getmenue(this.getmenueid).subscribe({
      next:(response)=>{
        console.log(response);
          
      this.Allmenus= response.menueItems;
    
        

      }
    })
    
  }
  formgrioup:FormGroup=new FormGroup({
    quantity:new FormControl('',[Validators.required]),
    
    
   
  });
  
  
// دالة لإضافة المستخدم إلى المصفوفة عند الضغط على Submit
addOrderDetails( item:any): void {
  console.log(item);
  
  
 var order= { item: { name: item.name, cost: item.cost, price: item.price }, quantity: this.formgrioup.get("quantity")?.value };
 this.orderItems.push(order);
 localStorage.setItem("Orders",JSON.stringify(this.orderItems));
 
 
  console.log(this.orderItems);
}
// إظهار النموذج
showForm() {
  this.isFormVisible = true;
  let x=localStorage.getItem("Orders");
  console.log(x);
  
}

// إغلاق النموذج
closeForm() {
  this.isFormVisible = false;
}

// حفظ البيانات
submitForm():void {
 
  
  let compostedObject={
    resturantId: this.idrestaurant,
    tableNumber:this.formGeroup.get("tableNumber")?.value,
    orderItems:this.orderItems,
    

  }
  console.log(compostedObject);
  
  this._AuthservicesService.CreatOrders(compostedObject).subscribe({
    next:(response)=>{
      console.log(response);
      

    }
  })
  this.orderItems.splice(0, this.orderItems.length);
  this.closeForm();
}

}