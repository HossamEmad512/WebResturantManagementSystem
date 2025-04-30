import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSalesService {
constructor(private _HttpClient:HttpClient,private _Router:Router) { }
  CreatSales(Data:any):Observable<any>{
    return this._HttpClient.post(`https://localhost:7145/api/sales`,Data)
  }
  GetSales(id:any):Observable<any>{
    return this._HttpClient.get(`https://localhost:7145/api/sales/${id}`)
  }
  GetCurrentDish(id:any):Observable<any>{
    return this._HttpClient.get(`https://localhost:7145/api/CurrentDishe/${id}`)
  }
  DeleteKitchen(id:any):Observable<any>{
    return this._HttpClient.delete(`https://localhost:7145/api/CurrentDishe/delete/${id}`)
  }
  CreatEmplyeeAccount(userdata:object):Observable<any>{
    return this._HttpClient.post(`https://localhost:7145/api/employee/create`,userdata)
  }
  GetEmplyee(id:any):Observable<any>{
    return this._HttpClient.get(`https://localhost:7145/api/employee/${id}`)
  }
  DeleteEmplyee(gmail:any):Observable<any>{
    return this._HttpClient.delete(`https://localhost:7145/api/employee/delete/${gmail}`)
  }

     updataEmplyee(updata:object):Observable<any>{
      return this._HttpClient.put(`https://localhost:7145/api/employee/update`,updata)
     }
     CreateWorkEmplyee(updata:object):Observable<any>{
      return this._HttpClient.post(`https://localhost:7145/api/WorkEmployee/create`,updata)
     }
     GetworkEmplyee(id:any):Observable<any>{
      return this._HttpClient.get(`https://localhost:7145/api/WorkEmployee/${id}`,)
     }
     updataworkemplyee(userdata:any):Observable<any>{
      return this._HttpClient.put(`https://localhost:7145/api/WorkEmployee/update`,userdata)

     }
     DeleteWorkEmplyee(EmployeeId:any):Observable<any>{
      return this._HttpClient.delete(`https://localhost:7145/api/WorkEmployee/delete/${EmployeeId}`)

     }

     CreateRecommendation(userdata:any):Observable<any>{
      return this._HttpClient.post(`https://localhost:7145/api/Recommendations/create`,userdata)

 
     }
     DeletRecommendation(id:any):Observable<any>{
      return this._HttpClient.delete(`https://localhost:7145/api/Recommendations/delete/${id}`  )
 
     }

     GettRecommendation(resturantId:any):Observable<any>{
      return this._HttpClient.get(`https://localhost:7145/api/Recommendations/${resturantId}`  )
 
     }


}
