import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthservicesService } from '../authservices.service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css'],
})
export class MenueComponent implements OnInit {
  details: any = [];

  constructor(
    private route: ActivatedRoute,
    private _Router: Router,
    private _AuthservicesService: AuthservicesService
  ) {}
  parentId: any;
  getmenueid: any;
  GetAllMenue: any;
  role = localStorage.getItem('role');

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.parentId = +params['id']; // الحصول على id من الـ route
    });
    console.log(this.parentId);
    localStorage.setItem('IdRestaurant', this.parentId);
    this.getmenueid = localStorage.getItem('IdRestaurant');

    this._AuthservicesService.Getmenue(this.getmenueid).subscribe({
      next: (response) => {
        console.log('GetMenueiiii', response);

        this.GetAllMenue = response.menueItems;
      },
    });
  }
}
