import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { OneServicePageComponent } from './one-service-page/one-service-page.component';
import { HeaderComponent } from './header/header.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { FirstCardsComponent } from './first-cards/first-cards.component';
import { WhatIsStepComponent } from './what-is-step/what-is-step.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    MissionPageComponent,
    ServicesPageComponent,
    OneServicePageComponent,
    HeaderComponent,
    CarrouselComponent,
    SubMenuComponent,
    FirstCardsComponent,
    WhatIsStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
