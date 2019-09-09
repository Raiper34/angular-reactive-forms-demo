import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
})
export class FormGroupComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
    this.loginForm.valueChanges.subscribe(value => console.log(value));
    this.loginForm.get('name').valueChanges.subscribe(value => console.log(`Name: ${value}`));
  }

  submit(): void {
    console.log(this.loginForm.value);
  }

  getName(): void {
    alert(this.loginForm.get('name').value);
  }

  reset(): void {
    this.loginForm.reset();
  }

}
