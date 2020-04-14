import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserspagesComponent } from './userspages/userspages.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: 'userspages', component: UserspagesComponent},
  { path: '',redirectTo: "userpages",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
