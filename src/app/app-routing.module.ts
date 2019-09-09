import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormControlComponent} from './form-control/form-control.component';
import {FormGroupComponent} from './form-group/form-group.component';
import {FormGroupValidationComponent} from './form-group-validation/form-group-validation.component';
import {FormGroupBuilderComponent} from './form-group-builder/form-group-builder.component';
import {DynamicFormGroupComponent} from './dynamic-form-group/dynamic-form-group.component';
import {DynamicFormArrayComponent} from './dynamic-form-array/dynamic-form-array.component';

const routes: Routes = [
  { path: 'form-control', component: FormControlComponent},
  { path: 'form-group', component: FormGroupComponent },
  { path: 'form-group-builder', component: FormGroupBuilderComponent},
  { path: 'form-group-validation', component: FormGroupValidationComponent },
  { path: 'dynamic-form-group', component: DynamicFormGroupComponent },
  { path: 'dynamic-form-array', component: DynamicFormArrayComponent },
  { path: '**', redirectTo: '/form-control'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
