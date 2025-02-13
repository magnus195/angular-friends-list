import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {PeopleComponent} from "./people/people.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, PeopleComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
