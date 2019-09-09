import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormGroupValidationComponent } from './form-group-validation/form-group-validation.component';
import { FormGroupBuilderComponent } from './form-group-builder/form-group-builder.component';
import { DynamicFormGroupComponent } from './dynamic-form-group/dynamic-form-group.component';
import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    FormGroupComponent,
    FormGroupValidationComponent,
    FormGroupBuilderComponent,
    DynamicFormGroupComponent,
    DynamicFormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // IMPORTANT
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
