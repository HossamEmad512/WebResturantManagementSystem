import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoomendationsService {

constructor(private _HttpClient:HttpClient,private _Router:Router) { }
  CreateRecommendations(Data:any):Observable<any>{
    return this._HttpClient.post(`https://recommendation-ai-production.up.railway.app/recommend_food`,Data)
  }
  RecommendationProfit(Data:any):Observable<any>{
    return this._HttpClient.post(`https://recommendation-ai-production.up.railway.app/recommend_profit`,Data)
  }
  collaborative_recommendation(Data:any):Observable<any>{
    return this._HttpClient.post(`https://recommendation-ai-production.up.railway.app/collaborative_recommendation`,Data)
  }

}
