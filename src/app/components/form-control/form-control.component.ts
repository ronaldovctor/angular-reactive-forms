import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  firstName = new FormControl()
  lastName = new FormControl()

  constructor() { }

  ngOnInit(): void {
    this.firstName.valueChanges.subscribe(name => console.log(name))
  }

  setFirstName(): void {
    this.firstName.setValue('Adam')
    console.log(this.firstName.value)
  }

}
