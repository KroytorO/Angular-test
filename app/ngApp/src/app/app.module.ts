import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReturnComponent } from './return/return.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductGroupsComponent } from './product-groups/product-groups.component';

import {AuthModule} from "./auth/auth.module";

import {UserService} from "./shared/services/users.service";
import { BasketComponent } from './basket/basket.component';
import { BasketWithGoodsComponent } from './basket-with-goods/basket-with-goods.component';
import { GoodsInTheBasketComponent } from './goods-in-the-basket/goods-in-the-basket.component';
import {AppService} from "./services/app.service";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavComponent,
    FooterComponent,
    HomePageComponent,
    ProductComponent,
    DeliveryComponent,
    PaymentComponent,
    ContactsComponent,
    ReturnComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    CatalogComponent,
    ProductGroupsComponent,
    BasketComponent,
    BasketWithGoodsComponent,
    GoodsInTheBasketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule //импортируем наш созданный модуль
  ],
  providers: [
    UserService,
    AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
