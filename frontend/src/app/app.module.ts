import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApiClientModule } from './api/client/api-client.module';
import { AppComponent } from './app.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    ApiClientModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
