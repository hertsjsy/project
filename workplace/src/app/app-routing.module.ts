import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContainerComponent } from './components/container/container.component';
RegisterComponent

const routes: Routes = [
  {path:"login",
  component:LoginComponent},
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'container',
    component: ContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
