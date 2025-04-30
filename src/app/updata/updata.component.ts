import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthservicesService } from '../authservices.service';

@Component({
  selector: 'app-updata',
  templateUrl: './updata.component.html',
  styleUrls: ['./updata.component.css']
})
export class UpdataComponent implements OnInit {
   ownerEmail:any=localStorage.getItem('eToken');
    detailsId:any;
  
    constructor(private _ActivatedRoute:ActivatedRoute,private _AuthservicesService:AuthservicesService,private _ToastrService:ToastrService,private _Router:Router){}
   
     forimgroup:FormGroup=new FormGroup({
       resturantName:new FormControl('',[Validators.required]),
       
       
       
   
     })
  
    ngOnInit(): void {
     this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        console.log(params.get('id'));
        this.detailsId=Number(params.get('id')) ;
        
        
        
  
      }
     })
      
      
    }
    Updata():void{
      let y = this.forimgroup.get('resturantName')?.value;
      let combinedObject = {
        resturantName: y,
        ownerEmail:this.ownerEmail,
        id:this.detailsId
  
        
        
      };
   
    
    this._AuthservicesService.updatarestaurant(combinedObject).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success('Updated Succefully')
        this._Router.navigate(['/home']);
        
  
      }
    })
  
    }

}
