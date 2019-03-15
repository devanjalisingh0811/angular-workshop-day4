import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy, DoCheck{

  title:string ="Displaying Data";
  defaultText:string ="Template Reference example";
  textForTwoBinding:string ="Two way binding example";
  isDisabled:boolean = false;
  inputText:any;
  students = [new Student(1, "Devanjali", "1234"), new Student(2, "Idemia", "5678")];

  date = new Date();
  
  constructor() {
    console.log("constructor");
   }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

  setValueA(input:HTMLInputElement){
    alert("Update Text A value");
    input.value = "Text has been changed";
  }

  setValueB(){
    alert("Update Text B value");
    this.inputText = "Text has been changed";
  }

}
