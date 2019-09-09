import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

function ValidateEmail(control: AbstractControl) {
  if (!String(control.value).includes('@')) {
    return {validEmail: true};
  }
  return null;
}

@Component({
  selector: 'app-form-group-validation',
  templateUrl: './form-group-validation.component.html',
})
export class FormGroupValidationComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({ // FORM HERE
      name: ['', Validators.required], // REFERENCE
      password: ['', [Validators.required, Validators.minLength(6)]],
      more: this.fb.group({
        age: [25, Validators.pattern(/^\d+$/)],
        mail: ['', ValidateEmail]
      })
    });

    this.loginForm.valueChanges.subscribe(value => console.log(value));
  }

  submit(): void {
    console.log(this.loginForm.value);
  }

  reset(): void {
    this.loginForm.reset();
  }

  toggleName(): void {
    if (this.loginForm.get('name').disabled) {
      this.loginForm.get('name').enable();
    } else {
      this.loginForm.get('name').disable();
    }
  }

}
