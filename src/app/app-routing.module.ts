import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardService } from './Service/auth-guard.service';


const routes: Routes = [
 {path: '' , redirectTo: 'signin' , pathMatch: 'full'},
 {path: 'signin', component: SignInComponent},
 {path: 'signup', component: SignUpComponent},
 {path: 'profile', component: ProfileComponent,canActivate:[AuthGuardService]},
 {path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
