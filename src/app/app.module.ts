import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SearchdeptComponent } from './searchdept/searchdept.component';
import { ViewdoctorsComponent } from './viewdoctors/viewdoctors.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    SearchdeptComponent,
    ViewdoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
