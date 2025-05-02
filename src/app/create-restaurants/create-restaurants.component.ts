import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthservicesService } from '../authservices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-restaurants',
  templateUrl: './create-restaurants.component.html',
  styleUrls: ['./create-restaurants.component.css'],
})
export class CreateRestaurantsComponent {
  constructor(
    private _AuthservicesService: AuthservicesService,
    private _Router: Router,
    private _ToastrService: ToastrService
  ) {}

  token: any = localStorage.getItem('eToken');

  forimgroup: FormGroup = new FormGroup({
    resturantName: new FormControl('', [Validators.required]),
  });

  createrestaurant(): void {
    let y = this.forimgroup.get('resturantName')?.value;

    // دمج المتغيرين في كائن واحد
    let combinedObject = {
      resturantName: y,
      ownerEmail: this.token,
    };

    this._AuthservicesService.createrestaurant(combinedObject).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success('Created Succefully');
        this.forimgroup.get('resturantName')?.setValue('');
        this.forimgroup.get('resturantName')?.setErrors(null);
        this._Router.navigate(['/home']);
      },
    });
  }
}
