import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSalesService } from '../auth-sales.service';
import { AuthservicesService } from '../authservices.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  isFormVisible: boolean = false;
  order: any;
  ordersByDate: any[] = [];
  totalCostWithDateFilter: any;
  totalPriceWithDateFilter: any;
  totalProfitWithDateFilter: any;
  showAll: boolean = true;
  constructor(
    private _AuthservicesService: AuthservicesService,
    private _Router: Router,
    private _AuthSalesService: AuthSalesService
  ) {}
  TOTAL: any;
  subTotal: any;
  ngOnInit(): void {
    var RestauranyId = localStorage.getItem('IdRestaurant');
    this._AuthSalesService.GetSales(RestauranyId).subscribe({
      next: (Response) => {
        this.TOTAL = Response;
        console.log(this.TOTAL);
      },
    });
  }
  showForm(item: any) {
    this.isFormVisible = true;
    this.order = item;
  }
  closeForm() {
    this.isFormVisible = false;
    this.order = null;
  }

  getLastNDays(days: number): void {
    var dates: Date[] = [];
    for (let i = 0; i < this.TOTAL.orders.length; i++) {
      var year = this.TOTAL.orders[i].dateOfCreation.slice(0, 4);
      var month = this.TOTAL.orders[i].dateOfCreation.slice(5, 7);
      var day = this.TOTAL.orders[i].dateOfCreation.slice(8, 10);
      var date = new Date(year, +month - 1, day);
      dates.push(date);
    }
    const currentDate = new Date(); // التاريخ الحالي
    var result: any[] = [];
    // تحديد الحدود الزمنية (التاريخ الحالي - N أيام)
    var boundaryDate = new Date(currentDate);
    boundaryDate.setDate(currentDate.getDate() - days); // خصم الأيام من التاريخ الحالي
    // تصفية التواريخ التي تقع ضمن الفترة الزمنية المحددة
    for (let index = 0; index < dates.length; index++) {
      if (dates[index] >= boundaryDate) {
        console.log(dates[index]);
        result.push(this.TOTAL.orders[index]);
      }
    }
    this.showAll = false;
    this.ordersByDate = result;
    this.totalCostWithDateFilter = 0;
    this.totalPriceWithDateFilter = 0;
    this.totalProfitWithDateFilter = 0;
    this.ordersByDate.forEach((e) => {
      this.totalCostWithDateFilter += e.totalCost;
      this.totalPriceWithDateFilter += e.totalPrice;
    });
    this.totalProfitWithDateFilter =
      this.totalPriceWithDateFilter - this.totalCostWithDateFilter;
  }
  allDate(): void {
    this.showAll = true;
  }
}
