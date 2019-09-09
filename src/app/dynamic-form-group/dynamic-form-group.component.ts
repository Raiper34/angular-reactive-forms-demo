import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-group',
  templateUrl: './dynamic-form-group.component.html',
})
export class DynamicFormGroupComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({ // FORM HERE
      name: '',
      password: '',
      hasDog: false
    });

    this.loginForm.get('hasDog').valueChanges.subscribe(value => {
      if (value) {
        this.loginForm.addControl('dog', this.fb.group({
          name: '',
          age: 10,
        }));
      } else {
        this.loginForm.removeControl('dog');
      }
    });
  }

  submit(): void {
    console.log(this.loginForm.value);
  }

}
