import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profileForm = new FormGroup({
    firstName :new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl('')
    })
  });

  onSubmit(){
    alert(JSON.stringify(this.profileForm.value));
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName : "Idemia",
      lastName :"Noida"
    })
  }

}
