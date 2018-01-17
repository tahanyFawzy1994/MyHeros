import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
