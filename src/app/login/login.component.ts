import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthservicesService } from '../authservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private _AuthservicesService: AuthservicesService,
    private _Router: Router
  ) {}
  formgrioup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
    ]),
    role: new FormControl(''),
  });

  login(): void {
    let x = this.formgrioup.get('email')?.value;
    let y = this.formgrioup.get('password')?.value;
    let z = this.formgrioup.get('role')?.value;
    this.formgrioup.get('email')?.setValue('');
    this.formgrioup.get('password')?.setValue('');
    this.formgrioup.get('role')?.setValue('');
    // دمج المتغيرين في كائن واحد
    let combinedObject = {
      email: x,
      password: y,
      role: z,
    };
    localStorage.setItem('role', combinedObject.role);

    console.log(combinedObject);
    this._AuthservicesService.setLogin(combinedObject).subscribe({
      next: (response) => {
        localStorage.setItem('eToken', response.email);
        if (localStorage.getItem('role') == 'Employee') {
          localStorage.setItem('position', response.position);
          localStorage.setItem('loginIdResturant', response.resturantId);
        }
        console.log(response);
        this._Router.navigate(['/home']);
      },
    });
  }
}
