import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {DeliveryComponent} from "./delivery/delivery.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {PaymentComponent} from "./payment/payment.component";
import {ReturnComponent} from "./return/return.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {BasketComponent} from "./basket/basket.component";

 // let defaultRoot = 'app';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path:'delivery', component:DeliveryComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'payment', component:PaymentComponent },
  {path:'return', component:ReturnComponent },
  {path:'login-form', component:LoginFormComponent },
  {path:'registration-form', component:RegistrationFormComponent },
  {path:'catalog', component:CatalogComponent },
  {path:'basket', component:BasketComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
