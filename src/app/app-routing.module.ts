import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { FormComponent } from './form/form.component';
import { BootComponent } from './boot/boot.component';
import { Data2Component } from './data2/data2.component';

const routes: Routes = [

{path: 'data', component: DataComponent},
{path:'form', component: FormComponent},
{path:'boot', component: BootComponent},
{path:'data2', component: Data2Component},
{path:'**', redirectTo:'/form'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
