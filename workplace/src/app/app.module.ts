import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContainerComponent } from './components/container/container.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificattionComponent } from './components/notificattion/notificattion.component';
import { SearchComponent } from './components/search/search.component';
import { ProductsComponent } from './components/products/products.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { AngularComponent } from './components/angular/angular.component';
import { EnrollService } from './services/enroll.service';
import { AddUserComponent } from './add-user/add-user.component';
import { LoggerService } from './services/logger.service';
import { AllusersComponent } from './components/allusers/allusers.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificattionComponent,
    SearchComponent,
    ProductsComponent,
    HooksComponent,
    JavascriptComponent,
    AngularComponent,
    AddUserComponent,
    AllusersComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [EnrollService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
