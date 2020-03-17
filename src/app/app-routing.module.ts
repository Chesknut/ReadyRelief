import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { PrepareComponent } from './prepare/prepare.component';
import { ReliefComponent } from './relief/relief.component';
import { PostComponent } from './post/post.component';

// Import all the components for which navigation service has to be activated
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Import canActivate guard services
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  //{path: 'signup', component: SignupComponent},
  {path: 'signup', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  //{path: 'login', component: LoginComponent},
  {path: 'login', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'update', component: UpdateComponent},
  {path: 'prepare', component: PrepareComponent},
  {path: 'relief', component: ReliefComponent},
  {path: 'post', component: PostComponent},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
