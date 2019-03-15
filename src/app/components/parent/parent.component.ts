import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  amountToSend:number;
  constructor() { }

  @ViewChild(ChildComponent)
  childComponent:ChildComponent;

  isMoneyRequested:boolean = false;
  amount:number;

  ngOnInit() {
  }

  requestForMoneyReceived(data){
    this.isMoneyRequested = true;
    alert("Okay! I Received Request for Money");
  }

  sendMoney(){
    this.amountToSend = this.amount;
  }

  deductPocketMoney(){
    this.childComponent.pocketMoney = 20;
  }

}
