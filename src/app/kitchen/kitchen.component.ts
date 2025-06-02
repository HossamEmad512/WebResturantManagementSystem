import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSalesService } from '../auth-sales.service';
import { AuthservicesService } from '../authservices.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent implements OnInit {
  AllOrder: any;
  IdOrderKitchen: any;
  kitchenOrder: any = [];
  cashierOrder: any = [];
  role: any;
  position: any;
  constructor(
    private _AuthservicesService: AuthservicesService,
    private _Router: Router,
    private _AuthSalesService: AuthSalesService
  ) {}
  ngOnInit(): void {
    var RestauranyId = localStorage.getItem('IdRestaurant');
    this.role = localStorage.getItem('role');
    if (this.role == 'Employee') {
      this.position = localStorage.getItem('position');
    }
    this._AuthSalesService.GetCurrentDish(RestauranyId).subscribe({
      next: (response) => {
        console.log(response);
        this.AllOrder = response;
        this.IdOrderKitchen = response.id;
        this.cashierOrder = [];
        this.kitchenOrder = [];
        for (let index in this.AllOrder) {
          if (this.AllOrder[index].status == 'Done') {
            this.cashierOrder.push(this.AllOrder[index]);
          } else {
            this.kitchenOrder.push(this.AllOrder[index]);
          }
        }
      },
    });
  }

  DeleteCurrentDishe(id: any): void {
    this._AuthSalesService.DeleteCurrentDishe(id).subscribe({
      next: (response) => {
        console.log(response);
        this.updateArray();
        window.location.reload();
      },
    });
  }
  updateArray() {
    this.cashierOrder = [];
    this.kitchenOrder = [];
    for (let index in this.AllOrder) {
      if (this.AllOrder[index].status == 'Done') {
        this.cashierOrder.push(this.AllOrder[index]);
      } else {
        this.kitchenOrder.push(this.AllOrder[index]);
      }
    }
  }
  UpdateCurrentDishe(item: any): void {
    item.status = 'Done';
    this._AuthSalesService.UpdateCurrentDishe(item).subscribe(() => {});
    this.updateArray();
  }

  interval = setInterval(() => {
    window.location.reload();
  }, 300000);
}
