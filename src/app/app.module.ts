import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/HomeComponent/home.component';

@NgModule({ 
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, NgbModule.forRoot(), AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ ]
})

export class AppModule { }