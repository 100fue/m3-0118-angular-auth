import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AnimalService } from '../services/animal.service';
import { PanelService } from '../services/panel.service';
import { SessionService } from '../services/session.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { AppRoutingModule } from './routes';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SingleAnimalComponent } from './single-animal/single-animal.component';
import { SupportComponent } from './support/support.component';

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
   AppRoutingModule,
   AgmCoreModule.forRoot({
     apiKey: 'AIzaSyBkLthX20CS9FmktqyxJvUqUYTIbSdHhlI'
   })
 ],
 providers: [SessionService, AnimalService, PanelService],
 bootstrap: [AppComponent]
})
export class AppModule { }
