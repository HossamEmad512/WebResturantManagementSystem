import { CreateRestaurantsComponent } from './create-restaurants/create-restaurants.component';
import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { HomeComponent } from './home/home.component';

import { EmpyleeComponent } from './empylee/empylee.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisiterComponent } from './regisiter/regisiter.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { UpdataComponent } from './updata/updata.component';
import { MenueComponent } from './menue/menue.component';
import { CreateMenueComponent } from './create-menue/create-menue.component';
import { NavbarmeneComponent } from './navbarmene/navbarmene.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { SalesComponent } from './sales/sales.component';
import { CreateOrdersComponent } from './create-orders/create-orders.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { EmplyeeAccountComponent } from './emplyee-account/emplyee-account.component';
import { UpdataEmplyeeComponent } from './updata-emplyee/updata-emplyee.component';
import { WorkEmplyeeComponent } from './work-emplyee/work-emplyee.component';
import { GetWorkEmplyeeComponent } from './get-work-emplyee/get-work-emplyee.component';
import { UpdatWorkEmplyeeComponent } from './updat-work-emplyee/updat-work-emplyee.component';
import { RecommendationsfoodComponent } from './recommendationsfood/recommendationsfood.component';
import { GetRecommendationsComponent } from './get-recommendations/get-recommendations.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    canActivate: [authGuard],
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'home', component: HomeComponent },
      { path: 'creatmenue', component: CreateMenueComponent },

      { path: 'navbarMenue', component: NavbarmeneComponent },
      { path: 'EmplyeeAccount', component: EmplyeeAccountComponent },
      { path: 'UpdataAccountEmplyee', component: UpdataEmplyeeComponent },

      { path: 'updata/:id', component: UpdataComponent },
      { path: 'create', component: CreateRestaurantsComponent },
      { path: 'CreateOrders', component: CreateOrdersComponent },
      {
        path: '',
        canActivate: [authGuard],
        component: DashboardComponent,
        children: [
          { path: 'Menu/:id', component: MenueComponent },
          { path: 'WorkEmplyee', component: WorkEmplyeeComponent },
          { path: 'updataworEmplyee', component: UpdatWorkEmplyeeComponent },
          { path: 'Kitchen', component: KitchenComponent },
          { path: 'Recommendation', component: RecommendationsfoodComponent },
          { path: 'GetEmplyeeWork', component: GetWorkEmplyeeComponent },
          {
            path: 'GetRecommendations',
            component: GetRecommendationsComponent,
          },

          { path: 'emplyee', component: EmpyleeComponent },
          { path: 'creatmenue/:id', component: CreateMenueComponent },
          { path: 'Orders', component: OrdersComponent },
          { path: 'Sales', component: SalesComponent },
        ],
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisiterComponent },
    ],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
