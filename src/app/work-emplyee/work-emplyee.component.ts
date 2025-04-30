import { Component } from '@angular/core';
import { AuthSalesService } from '../auth-sales.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-emplyee',
  templateUrl: './work-emplyee.component.html',
  styleUrls: ['./work-emplyee.component.css'],
})
export class WorkEmplyeeComponent {
  /**
   *
   */
  Idrestaurnat: any;
  role = localStorage.getItem('role');
  constructor(private _AuthSalesService: AuthSalesService) {}
  formgrioup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),

    phone: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
  });

  CreatWorkEmplyee(): void {
    this.Idrestaurnat = localStorage.getItem('IdRestaurant');

    let compostedObject = {
      resturantId: this.Idrestaurnat,

      name: this.formgrioup.get('name')?.value,
      salary: this.formgrioup.get('salary')?.value,
      phone: this.formgrioup.get('phone')?.value,
    };

    this._AuthSalesService.CreateWorkEmplyee(compostedObject).subscribe({
      next: (response) => {
        console.log('workEmplyee', response);
      },
    });
  }
}
