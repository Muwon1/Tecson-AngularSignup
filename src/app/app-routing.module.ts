import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { signupComponent } from './components/signup/signup.component';





const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path :'login', component: LoginComponent},
  {path :'home', component: HomeComponent},
  {path :'signup', component: signupComponent},
  {path : 'forgot-password', component: ForgotPasswordComponent},
  {path :'email-verification', component: EmailVerificationComponent}
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }