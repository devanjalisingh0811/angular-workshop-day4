import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test sendMoney', () => {
    component.amount = 100;
    component.sendMoney();
    expect(component.amountToSend).toBeDefined();
    expect(component.amountToSend).toEqual(component.amount);
    expect(component.amountToSend).toBe(100);
  });

  it('should test deductMoney', () => {
    component.deductPocketMoney();
    expect(component.childComponent.pocketMoney).toEqual(20);
  });
});
