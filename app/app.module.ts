import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/navbar/navbarcomponent';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {homeComponent} from './components/pages/home.component';
import {aboutComponent} from './components/pages/about.component';
import {profileComponent} from './components/pages/profile.component';
import {footerComponent} from './components/footer/footer.component';

import{routing} from './app.routings';
@NgModule({
  imports:      [ BrowserModule ,routing],
  declarations: [ AppComponent,
                 NavBarComponent,  
                 JumbotronComponent ,
                 homeComponent,
                 aboutComponent,profileComponent,footerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
