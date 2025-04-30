import { AuthSalesService } from './../auth-sales.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-recommendations',
  templateUrl: './get-recommendations.component.html',
  styleUrls: ['./get-recommendations.component.css'],
})
export class GetRecommendationsComponent implements OnInit {
  /**
   *
   */
  AllResponse: any;
  X: any;
  constructor(private _AuthSalesService: AuthSalesService) {}
  ngOnInit(): void {
    var IDrestaurant = localStorage.getItem('IdRestaurant');
    this._AuthSalesService.GettRecommendation(IDrestaurant).subscribe({
      next: (response) => {
        console.log('GetRecomm', response);
        this.AllResponse = response;
      },
    });
  }

  DeletItem(recommendation: any): void {
    this.X = this.AllResponse;

    this._AuthSalesService.DeletRecommendation(recommendation.id).subscribe({
      next: (response) => {
        console.log('DeleteRecommendations', response);
        window.location.reload();
      },
    });
  }
}
