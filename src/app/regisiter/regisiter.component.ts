import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormControlOptions,
} from '@angular/forms';
import { AuthservicesService } from '../authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regisiter',
  templateUrl: './regisiter.component.html',
  styleUrls: ['./regisiter.component.css'],
})
export class RegisiterComponent {
  constructor(
    private _AuthservicesService: AuthservicesService,
    private _Router: Router
  ) {}
  formgrioup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    displayName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });

  register(): void {
    console.log(this.formgrioup.value);

    this._AuthservicesService.setregisiter(this.formgrioup.value).subscribe({
      next: (response) => {
        console.log(response);

        this._Router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.formgrioup.get('displayName')?.setValue('');
    this.formgrioup.get('email')?.setValue('');
    this.formgrioup.get('phoneNumber')?.setValue('');
    this.formgrioup.get('password')?.setValue('');
    this.formgrioup.get('role')?.setValue('');
  }
}
