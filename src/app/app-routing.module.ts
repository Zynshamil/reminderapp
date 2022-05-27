import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
// Login path
{
  path:'',component:LoginComponent
},

  // Register path
 {
    path:'register',component:RegisterComponent
},
// Dashboard Path
{
 path:'dashboard',component:DashboardComponent
},
{
  path:'events',component:ViewEventComponent
 },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
