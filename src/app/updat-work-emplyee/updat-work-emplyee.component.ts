import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthSalesService } from '../auth-sales.service';

@Component({
  selector: 'app-updat-work-emplyee',
  templateUrl: './updat-work-emplyee.component.html',
  styleUrls: ['./updat-work-emplyee.component.css'],
})
export class UpdatWorkEmplyeeComponent {
  GetAllEmplyee: any;
  Idrestaurnat: any;

  /**
   *
   */
  idEmplyee: any;
  constructor(private _AuthSalesService: AuthSalesService) {}
  formgrioup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),

    phone: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
  });

  UpdataWorkEmplyee(): void {
    this.Idrestaurnat = localStorage.getItem('IdRestaurant');
    this.idEmplyee = localStorage.getItem('IdEmplyee');
    let compostedObject = {
      resturantId: this.Idrestaurnat,
      id: this.idEmplyee,

      name: this.formgrioup.get('name')?.value,
      salary: this.formgrioup.get('salary')?.value,
      phone: this.formgrioup.get('phone')?.value,
    };

    this._AuthSalesService.updataworkemplyee(compostedObject).subscribe({
      next: (response) => {
        console.log(response);
        this.formgrioup.get('salary')?.setValue('');
        this.formgrioup.get('salary')?.setErrors(null);
        this.formgrioup.get('phone')?.setValue('');
        this.formgrioup.get('phone')?.setErrors(null);
        this.formgrioup.get('name')?.setValue('');
        this.formgrioup.get('name')?.setErrors(null);
      },
    });
  }
}
