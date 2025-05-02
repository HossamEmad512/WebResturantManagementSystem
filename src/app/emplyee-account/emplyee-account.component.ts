import { Component } from '@angular/core';
import { AuthSalesService } from '../auth-sales.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emplyee-account',
  templateUrl: './emplyee-account.component.html',
  styleUrls: ['./emplyee-account.component.css'],
})
export class EmplyeeAccountComponent {
  Accounts: any;
  Idrestaurnat: any;
  Role: any;
  role: any;

  constructor(private _AuthSalesService: AuthSalesService) {}
  formgrioup: FormGroup = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
  });

  createAccountSALES(): void {
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
    this.formgrioup.get('Email')?.setValue('');
    this.formgrioup.get('Email')?.setErrors(null);
    this.formgrioup.get('salary')?.setValue('');
    this.formgrioup.get('salary')?.setErrors(null);
    this.formgrioup.get('password')?.setValue('');
    this.formgrioup.get('password')?.setErrors(null);
    this.formgrioup.get('name')?.setValue('');
    this.formgrioup.get('name')?.setErrors(null);

    this._AuthSalesService.CreatEmplyeeAccount(compostedObject).subscribe({
      next: (response) => {
        console.log(response);
        this.Accounts = response;
      },
    });
  }
}
