import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    birth: new Date(),
    gender: '',
    state: '',
    city: '',
    street: '',
    phone1: '',
    phone2: ''
  }

  states: string[] = ['SP', 'PR', 'SC', 'RS', 'PA', 'RO', 'MA']

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit(): void {
    console.log(this.client)
  }

}
