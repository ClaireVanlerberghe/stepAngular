import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { OneServicePageComponent } from './one-service-page/one-service-page.component';

const routes: Routes = [
  { path:'/', component: HomePageComponent},
  { path:'/contact', component: ContactPageComponent},
  { path: '/mission', component: MissionPageComponent},
  { path: '/services', component: ServicesPageComponent},
  { path: '/services/:id', component: OneServicePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
