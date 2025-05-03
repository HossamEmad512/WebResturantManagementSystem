import { Component } from '@angular/core';
import { AuthSalesService } from '../auth-sales.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updata-emplyee',
  templateUrl: './updata-emplyee.component.html',
  styleUrls: ['./updata-emplyee.component.css'],
})
export class UpdataEmplyeeComponent {
  /**
   *
   */
  Idrestaurnat: any;
  Role: any;
  UpdataAll: any;

  constructor(private _AuthSalesService: AuthSalesService) {}
  formgrioup: FormGroup = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
  });

  UpdateEmplyee(): void {
    this.Idrestaurnat = localStorage.getItem('IdRestaurant');
    this.Role = 'Employee';
    let compostedObject = {
      resturantId: this.Idrestaurnat,
      Email: this.formgrioup.get('Email')?.value,
      name: this.formgrioup.get('name')?.value,
      salary: this.formgrioup.get('salary')?.value,
      password: this.formgrioup.get('password')?.value,
      role: this.Role,
    };
    console.log('hhtyEmplyee', compostedObject);

    this._AuthSalesService.updataEmplyee(compostedObject).subscribe({
      next: (response) => {
        console.log(response);
        this.UpdataAll = response;
      },
    });
  }
}
