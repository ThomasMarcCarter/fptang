// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { StudentsComponent } from './students/students.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { Pg01Component } from './classrooms/pg01/pg01.component';
import { Pg02Component } from './classrooms/pg02/pg02.component';
import { Pg03Component } from './classrooms/pg03/pg03.component';
import { Pg04Component } from './classrooms/pg04/pg04.component';
import { Pg05Component } from './classrooms/pg05/pg05.component';
import { Pg06Component } from './classrooms/pg06/pg06.component';

import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ClassroomsComponent,
    StudentsComponent,
    ActivityLogComponent,
    Pg01Component,
    Pg02Component,
    Pg03Component,
    Pg04Component,
    Pg05Component,
    Pg06Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
