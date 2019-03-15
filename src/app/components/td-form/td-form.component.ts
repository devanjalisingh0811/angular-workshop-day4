import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submmited: boolean = false;
  model = new Student(1, "", "");

  onSubmit() {
    this.submmited = true;
    alert("name:" + this.model.name + " password:" + this.model.password);
  }

}
