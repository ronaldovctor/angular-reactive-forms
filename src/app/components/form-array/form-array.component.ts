import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  clientForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: ['']
    }),
    phones: this.formBuilder.array(['']),
    // children: this.formBuilder.group({
    //   name: [''],
    //   age: ['']
    // })
    children: this.formBuilder.array([
    // this.formBuilder.group({
    //   name: [''],
    //   age: ['']
    // })
  ])
  })
  
  phones = this.clientForm.get('phones') as FormArray
  children = this.clientForm.get('children') as FormArray

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.clientForm.value)
  }

  addPhone(): void {
    this.phones.push(this.formBuilder.control(''))
  }

  addChild(): void {
    this.children.push(this.formBuilder.group({ name: [''], age: ['']}))
  }

}
