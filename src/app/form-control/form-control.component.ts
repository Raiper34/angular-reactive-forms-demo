import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html'
})
export class FormControlComponent implements OnInit {

  name = new FormControl(''); // Abstract Control

  ngOnInit() {
    this.name.valueChanges.subscribe(val => console.log(val));
  }

  setName(): void {
    this.name.setValue('Filip');
  }

  getName(): void {
    alert(this.name.value);
  }

}
