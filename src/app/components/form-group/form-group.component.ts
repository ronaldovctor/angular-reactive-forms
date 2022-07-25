import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  clientForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    name: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    })
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit():void {
    console.log(this.clientForm.value)
    console.log(
      `       First name: ${this.clientForm.value.firstName}
       Last name: ${this.clientForm.value.lastName}
       Name => First name: ${this.clientForm.value.name?.firstName}
      `
    )
  }

}
