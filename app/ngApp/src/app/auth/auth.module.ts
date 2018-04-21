import {NgModule} from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {CommonModule} from "@angular/common";
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
declarations:[
  LoginComponent,
  RegistrationComponent,
  AuthComponent
],
  imports:[
    CommonModule, //модуль, который несет базовый функционал по типу ангуляр
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})

export class AuthModule{}
