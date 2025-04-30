import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisiterComponent } from './regisiter/regisiter.component';

import { EmpyleeComponent } from './empylee/empylee.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule}from "@angular/common/http";
import { CreateRestaurantsComponent } from './create-restaurants/create-restaurants.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './loading.interceptor';
import { ToastrModule } from 'ngx-toastr';
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
import { FormsModule } from '@angular/forms';
import { GetRecommendationsComponent } from './get-recommendations/get-recommendations.component';





@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent,
    LoginComponent,
    RegisiterComponent,
    
    EmpyleeComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    NotfoundComponent,
 
    NavAuthComponent,
    CreateRestaurantsComponent,
    UpdataComponent,
    MenueComponent,
    CreateMenueComponent,
    NavbarmeneComponent,
    DashboardComponent,
    OrdersComponent,
    SalesComponent,
    CreateOrdersComponent,
    KitchenComponent,
    EmplyeeAccountComponent,
    UpdataEmplyeeComponent,
    WorkEmplyeeComponent,
    GetWorkEmplyeeComponent,
    UpdatWorkEmplyeeComponent,
    RecommendationsfoodComponent,
    GetRecommendationsComponent,
   

    
   
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
   
   
    ToastrModule.forRoot(),
  ],
  providers: [

   {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
