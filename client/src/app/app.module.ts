import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { AnimalService } from '../services/animal.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RouterModule } from '@angular/router';
import { routes } from "./routes";
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SingleAnimalComponent } from './single-animal/single-animal.component';
import { SupportComponent } from './support/support.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { LoginAuthGuard } from '../app/login.auth-guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    ListComponent,
    SingleAnimalComponent,
    SupportComponent,
    PanelControlComponent,
    NavBarComponent,
    
    // CommonModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkLthX20CS9FmktqyxJvUqUYTIbSdHhlI'
    })
  ],
  providers: [SessionService, AnimalService, LoginAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
