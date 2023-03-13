import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { DivisionComponent } from './division/division.component';
import { LoginComponent } from './login/login.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"addition",component :AdditionComponent},
  {path:"subtraction",component:SubtractionComponent},
  {path:"multiplication",component:MultiplicationComponent},
  {path:"division",component:DivisionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
