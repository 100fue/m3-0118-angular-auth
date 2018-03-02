import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { SingleAnimalComponent } from './single-animal/single-animal.component';
import { SupportComponent } from './support/support.component';
import { PanelControlComponent } from './panel-control/panel-control.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'signup', component: SignupFormComponent},
    { path: 'list', component: ListComponent},
    { path: 'list/:id', component: SingleAnimalComponent},
    { path: 'list/:id/support', component: SupportComponent},
    { path: 'panel-control', component: PanelControlComponent},
    { path: '**', redirectTo: ""}
];