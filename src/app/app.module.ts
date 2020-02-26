import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { LoginGuard } from './components/login/loginGuard';
import {TruncatePipe} from './pipes/truncate-pipe.component'
import { IoService } from './services/io.service';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    NavbarComponent,
    LoginComponent,
    AdminpanelComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [DataService,LoginService,LoginGuard,IoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
