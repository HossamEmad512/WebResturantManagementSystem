import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthservicesService } from '../authservices.service';
import { RecoomendationsService } from '../recoomendations.service';
import { AuthSalesService } from '../auth-sales.service';

@Component({
  selector: 'app-recommendationsfood',
  templateUrl: './recommendationsfood.component.html',
  styleUrls: ['./recommendationsfood.component.css'],
})
export class RecommendationsfoodComponent {
  recommendAllSelected: boolean = false;
  recommendProfitSelected: boolean = false;
  recommendOrdersSelected: boolean = false;

  isChecked = false;
  SelectAll: any;
  isFormVisible: boolean = false;
  recommendationItems: any;

  constructor(
    private _RecoomendationsService: RecoomendationsService,
    private _Router: Router,
    private _AuthSalesService: AuthSalesService
  ) {}
  formgrioup: FormGroup = new FormGroup({
    prep_time: new FormControl('', [Validators.required]),
    num_ingredients: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    selling_price: new FormControl('', [Validators.required]),
    cost_price: new FormControl('', [Validators.required]),
    n_recommendations: new FormControl('', [Validators.required]),
    option: new FormControl('', [Validators.required]),
    optons1: new FormControl('', [Validators.required]),
    options2: new FormControl('', [Validators.required]),
  });
  showForm() {
    this.isFormVisible = true;
  }

  // إغلاق النموذج
  closeForm() {
    this.isFormVisible = false;
  }

  Compare(): void {
    let z = this.formgrioup.get('options2')?.value;
    if (this.formgrioup.get('option')?.value === 'option') {
      console.log('kl');
      let compostedObject = {
        prep_time: this.formgrioup.get('prep_time')?.value,

        num_ingredients: this.formgrioup.get('num_ingredients')?.value,
        selling_price: this.formgrioup.get('selling_price')?.value,
        cost_price: this.formgrioup.get('cost_price')?.value,
        n_recommendations: this.formgrioup.get('n_recommendations')?.value,
        country: this.formgrioup.get('country')?.value,
      };
      console.log(compostedObject);
      this._RecoomendationsService
        .CreateRecommendations(compostedObject)
        .subscribe({
          next: (response) => {
            console.log('recommendation', response);
            this.SelectAll = response;
          },
        });
    } else if (this.formgrioup.get('optons1')?.value === 'option1') {
      let compostedObject = {
        top_n: this.formgrioup.get('n_recommendations')?.value,
        country: this.formgrioup.get('country')?.value,
      };
      console.log(compostedObject);
      this._RecoomendationsService
        .RecommendationProfit(compostedObject)
        .subscribe({
          next: (response) => {
            console.log('recommendationprofit', response);
            this.SelectAll = response;
          },
        });
    } else if (this.formgrioup.get('options2')?.value === 'option2') {
      let compostedObject = {
        n_recommendations: this.formgrioup.get('n_recommendations')?.value,
        country: this.formgrioup.get('country')?.value,
      };
      console.log(compostedObject);
      this._RecoomendationsService
        .collaborative_recommendation(compostedObject)
        .subscribe({
          next: (response) => {
            console.log('collaborative_recommendation', response);
            this.SelectAll = response;
          },
        });
    }
  }

  CreateRecommendation(Item: any): void {
    var IDrestaurant = localStorage.getItem('IdRestaurant');
    let compostedObject = {
      resturantId: IDrestaurant,
      category: Item.category,
      name: Item.name,
      prepMethod: Item.preparation_method,
      country: Item.country,
      cost: Item.cost_price_egp,
      price: Item.selling_price_egp,
      rating: Item.profit,
    };
    console.log('klpo', compostedObject);

    this._AuthSalesService.CreateRecommendation(compostedObject).subscribe({
      next: (response) => {
        console.log('fff', response);
      },
    });
  }
}
