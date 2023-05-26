// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ClassroomsComponent } from './classrooms/classrooms.component'; 
import { StudentsComponent } from './students/students.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { Pg01Component } from './classrooms/pg01/pg01.component';
import { Pg02Component } from './classrooms/pg02/pg02.component';
import { Pg03Component } from './classrooms/pg03/pg03.component';
import { Pg04Component } from './classrooms/pg04/pg04.component';
import { Pg05Component } from './classrooms/pg05/pg05.component';
import { Pg06Component } from './classrooms/pg06/pg06.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { 
    path: 'classrooms', 
    component: ClassroomsComponent, 
    canActivate: [AuthGuard],
    children: [
      {
        path: 'pg01',
        component: Pg01Component,
        canActivate: [AuthGuard]
      },
      {
        path: 'pg02',
        component: Pg02Component,
        canActivate: [AuthGuard]
      },
      {
        path: 'pg03',
        component: Pg03Component,
        canActivate: [AuthGuard]
      },
      {
        path: 'pg04',
        component: Pg04Component,
        canActivate: [AuthGuard]
      },
      {
        path: 'pg05',
        component: Pg05Component,
        canActivate: [AuthGuard]
      },
      {
        path: 'pg06',
        component: Pg06Component,
        canActivate: [AuthGuard]
      },
      // other children routes...
    ]
  },
  { path: 'students', component: StudentsComponent, canActivate: [AuthGuard] },
  { path: 'activity-log', component: ActivityLogComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
