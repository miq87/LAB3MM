import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudenciViewComponent } from './studenci-view/studenci-view.component';
import { SamochodyViewComponent } from './samochody-view/samochody-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StudenciViewComponent,
    SamochodyViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
