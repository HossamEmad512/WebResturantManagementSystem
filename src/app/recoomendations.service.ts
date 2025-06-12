import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecoomendationsService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}
  CreateRecommendations(Data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:5000/recommend_food`, Data);
  }
  RecommendationProfit(Data: any): Observable<any> {
    return this._HttpClient.post(
      `http://127.0.0.1:5000/recommend_profit`,
      Data
    );
  }
  collaborative_recommendation(Data: any): Observable<any> {
    return this._HttpClient.post(
      `http://127.0.0.1:5000/collaborative_recommendation`,
      Data
    );
  }
  AddFoodItems(Data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:5000/add_food_items`, Data);
  }
  AddOrderItem(Data: any): Observable<any> {
    return this._HttpClient.post(`http://127.0.0.1:5000/add_order_items`, Data);
  }
}
