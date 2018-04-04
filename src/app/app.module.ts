import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CompetencesComponent } from './competences/competences.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    CompetencesComponent,
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
