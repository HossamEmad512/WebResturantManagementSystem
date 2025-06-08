import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthservicesService } from '../authservices.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-menue',
  templateUrl: './create-menue.component.html',
  styleUrls: ['./create-menue.component.css'],
})
export class CreateMenueComponent {
  idrestaurant: any = localStorage.getItem('IdRestaurant');
  isPriceValid: boolean = true;
  constructor(
    private _AuthservicesService: AuthservicesService,
    private _Router: Router,
    private _ToastrService: ToastrService
  ) {}

  formgrioup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),

    cost: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  menueItems: any = [];

  // تعريف كائن فارغ لتخزين بيانات النموذج
  user = { name: '', cost: null, price: null };

  // دالة لإضافة المستخدم إلى المصفوفة عند الضغط على Submit
  addmenuedetails(): void {
    if (
      this.formgrioup.get('name')?.value != '' ||
      this.formgrioup.get('cost')?.value != null ||
      this.formgrioup.get('price')?.value != null
    ) {
      console.log('in if');

      let user = {
        name: this.formgrioup.get('name')?.value,
        cost: this.formgrioup.get('cost')?.value,
        price: this.formgrioup.get('price')?.value,
      };
      if (user.cost > user.price) {
        this.isPriceValid = false;
        return;
      }
      // نسخ البيانات وإضافتها إلى المصفوفة

      this.menueItems.push(user);

      this._ToastrService.success('is added successfully');
    }

    this.formgrioup.get('name')?.setValue(''),
      this.formgrioup.get('cost')?.setValue(null),
      this.formgrioup.get('price')?.setValue(null);
    this.formgrioup.get('price')?.setErrors(null);
    this.formgrioup.get('name')?.setErrors(null);
    this.formgrioup.get('cost')?.setErrors(null);
  }

  addmenue(): void {
    console.log(this.menueItems);

    this.addmenuedetails();
    if (this.menueItems.length == 0) {
      return;
    }
    let combinedObject = {
      menueItems: this.menueItems,
      resturantId: this.idrestaurant,
    };
    console.log('object', combinedObject);

    this._AuthservicesService.addMenue(combinedObject).subscribe({
      next: (response) => {
        console.log('menue', response);
        this._ToastrService.success('menue is created successfully');
        this.formgrioup.get('price')?.setErrors(null);
        this.formgrioup.get('name')?.setErrors(null);
        this.formgrioup.get('cost')?.setErrors(null);
        this._Router.navigate(['/Menu', this.idrestaurant]);
      },
    });
  }
}
