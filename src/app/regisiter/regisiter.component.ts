import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlOptions } from '@angular/forms';
import { AuthservicesService } from '../authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regisiter',
  templateUrl: './regisiter.component.html',
  styleUrls: ['./regisiter.component.css']
})
export class RegisiterComponent {

  constructor(private _AuthservicesService:AuthservicesService,private _Router:Router){}
  formgrioup:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    displayName:new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password:new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required])
    
   
  });

 

  hellwo():void{

    console.log(this.formgrioup.value);
    
    this._AuthservicesService.setregisiter(this.formgrioup.value).subscribe({
      next:(response)=>{
        
        console.log(response);
        
        this._Router.navigate(['/login'])
       

      },error:(err)=>{
        console.log(err);
        
        
      }
    })
 
  }
}
