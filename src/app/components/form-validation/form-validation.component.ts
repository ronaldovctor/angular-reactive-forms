import { Component, OnInit } from '@angular/core';
import { Client2 } from 'src/app/models/Client2';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  client: Client2 = {
    firstName: '',
    lastName: '',
    birth: new Date(),
    gender: '',
    state: '',
    city: '',
    street: '',
    email: '',
    age: 0,
    phone1: '',
    phone2: ''
  }

  states: string[] = ['SP', 'PR', 'SC', 'RS', 'PA', 'RO', 'MA']

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.client)
  }

}
