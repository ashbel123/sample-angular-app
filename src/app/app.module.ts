import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';
import { Data2Component } from './data2/data2.component';
import { AsyncComponent } from './async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    Data2Component,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
