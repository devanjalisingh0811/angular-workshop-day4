import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() requestMoney = new EventEmitter();
  @Input() pocketMoney:number;

  constructor() { }

  ngOnInit() {
  }

  requestForMoney(){
    this.requestMoney.emit("hii");
  }

}
