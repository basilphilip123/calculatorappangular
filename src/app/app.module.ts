import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import{FormsModule, ReactiveFormsModule}from '@angular/forms';
import { FactorialComponent } from './factorial/factorial.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubtractionComponent,
    FactorialComponent,
    MultiplicationComponent,
    DivisionComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
