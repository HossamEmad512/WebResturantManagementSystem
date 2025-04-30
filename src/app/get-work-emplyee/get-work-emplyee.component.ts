import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthSalesService } from './../auth-sales.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-work-emplyee',
  templateUrl: './get-work-emplyee.component.html',
  styleUrls: ['./get-work-emplyee.component.css']
})
export class GetWorkEmplyeeComponent implements OnInit {
  GetAllEmplyee:any;
  Idrestaurnat:any;
  role=localStorage.getItem('role');

  /**
   *
   */
  idEmplyee:any;
  constructor(private _AuthSalesService:AuthSalesService) {
    
    
  }
   formgrioup:FormGroup=new FormGroup({
       
         name:new FormControl('',[Validators.required]),
         
         phone:new FormControl('',[Validators.required]),
         salary:new FormControl('',[Validators.required]),
       
         
        
       });
  ngOnInit(): void {
    this.Idrestaurnat=localStorage.getItem('IdRestaurant');
    this._AuthSalesService.GetworkEmplyee(this.Idrestaurnat).subscribe({
      next:(response)=>{
        console.log('getWorkEmplyee',response);
        this.GetAllEmplyee=response,
        this.idEmplyee=response[0].id;
        localStorage.setItem('IdEmplyee',this.idEmplyee)
        

      }
    })

  }

  DeleteWorkEmplyee():void{
   
    this._AuthSalesService.DeleteWorkEmplyee(this.idEmplyee).subscribe({
      next:(response)=>{
        console.log(response);
        window.location.reload();
        

      }

    })
  }
}
