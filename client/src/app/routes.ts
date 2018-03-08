import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { SingleAnimalComponent } from './single-animal/single-animal.component';
import { SupportComponent } from './support/support.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { NgModule } from '@angular/core';
import { LoginRequiredAuthGuard } from './login-required.auth-guard';
import { AppAuthGuard } from './app.auth-guard';


const LOGIN_REQUIRED_APP_ROUTES: Routes = [
   { path: 'list', component: ListComponent},
   { path: 'list/:id', component: SingleAnimalComponent},
   { path: 'support/:id', component: SupportComponent},
   { path: 'panel', component: PanelControlComponent},
];

export const APP_ROUTES: Routes = [
   { path: 'signup', component: SignupFormComponent },
   { path: 'login', component: LoginFormComponent },
   {
       path: '',
       canActivate: [AppAuthGuard],
       children: [
           { path: '', component: HomeComponent, pathMatch: 'full'},
           {
               path: '',
               canActivate: [LoginRequiredAuthGuard],
               children: LOGIN_REQUIRED_APP_ROUTES
           }
       ]
   },
   { path: '**', redirectTo: ''},
];

@NgModule({
   imports: [
   RouterModule.forRoot([]),
   RouterModule.forChild(APP_ROUTES)
 ],
 providers: [LoginRequiredAuthGuard, AppAuthGuard],
 exports: [RouterModule]
})
export class AppRoutingModule {
}


