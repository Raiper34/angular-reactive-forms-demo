import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html',
})
export class DynamicFormArrayComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({ // FORM HERE
      name: '',
      password: '',
      dogs: this.fb.array([]),
    });
  }

  addDog(): void {
    (this.loginForm.get('dogs') as FormArray).push(this.fb.group({
      name: '',
      age: 20,
    }));
  }

  removeDog(index: number): void {
    (this.loginForm.get('dogs') as FormArray).removeAt(index); // Should be mutable, immutable operations break subscriptions
  }

  submit(): void {
    console.log(this.loginForm.value);
  }

}
