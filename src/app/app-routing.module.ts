import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginComponent } from './components/login/login.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { LoginGuard } from './components/login/loginGuard';


const routes: Routes = [
  {path:'',component:MainpageComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'login',component:LoginComponent},
  {path:"adminpanel",component:AdminpanelComponent,canActivate:[LoginGuard]}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
