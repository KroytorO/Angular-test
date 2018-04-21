/**
 * Created by Admin on 12.04.2018.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AuthComponent} from "./auth.component";


// let defaultRoot = 'app';

const routes: Routes = [
  {path:'',component:AuthComponent,children:[
    {path:'login', component:LoginComponent },
    {path:'registration', component:RegistrationComponent }
  ]}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
