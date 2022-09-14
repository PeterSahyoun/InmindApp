import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'app-home',component: HomeComponent},
  {path: ':country',component: DetailComponent},
  { path: 'app-login', component: LoginComponent },
  { path: 'app-sign-up', component: SignUpComponent },
  { path: '**', redirectTo:"app-login" },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}