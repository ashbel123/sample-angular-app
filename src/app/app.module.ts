import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Data2Component } from './data2/data2.component';
import { AsyncComponent } from './async/async.component';
import { ApiclientComponent } from './apiclient/apiclient.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormBuilder } from '@angular/forms';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { BootComponent } from './boot/boot.component';
// import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    Data2Component,
    AsyncComponent,
    ApiclientComponent,
    FormComponent,
    FormbuilderComponent,
    ReactiveComponent,
    BootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // HttpClientModule

  ],
  providers: [
    provideClientHydration(), provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
