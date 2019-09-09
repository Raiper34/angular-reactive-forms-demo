import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-group-builder',
  templateUrl: './form-group-builder.component.html',
})
export class FormGroupBuilderComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({ // FORM HERE
      name: '',
      password: '',
      more: this.fb.group({ // NESTED
        age: 25
      })
    });

    this.loginForm.valueChanges.subscribe(value => console.log(value));
    this.loginForm.get('more').get('age').valueChanges.subscribe(value => console.log(`Name: ${value}`));
  }

  submit(): void {
    console.log(this.loginForm.value);
  }

  getAge(): void {
    alert(this.loginForm.get('name').get('age').value);
  }

  reset(): void {
    this.loginForm.reset();
  }

  patch(): void {
    this.loginForm.patchValue({ // Path can ommit some values form form, set not
      name: 'Filip',
      password: 'secretpass',
    });
  }

}
