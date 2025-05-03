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

  menueItems: { name: any; cost: any; price: any }[] = [];

  // تعريف كائن فارغ لتخزين بيانات النموذج
  user = { name: '', cost: null, price: null };

  // دالة لإضافة المستخدم إلى المصفوفة عند الضغط على Submit
  addmenuedetails(): void {
    let user = { name: '', cost: null, price: null };

    (user.name = this.formgrioup.get('name')?.value),
      (user.cost = this.formgrioup.get('cost')?.value),
      (user.price = this.formgrioup.get('price')?.value),
      console.log(this.menueItems);

    // نسخ البيانات وإضافتها إلى المصفوفة
    this.menueItems.push(user);
    this._ToastrService.success('is added successfully');

    this.formgrioup.get('name')?.setValue(''),
      this.formgrioup.get('cost')?.setValue(''),
      this.formgrioup.get('price')?.setValue('');
    this.formgrioup.get('price')?.setErrors(null);
    this.formgrioup.get('name')?.setErrors(null);
    this.formgrioup.get('cost')?.setErrors(null);
  }

  addmenue(): void {
    this.addmenuedetails();
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
