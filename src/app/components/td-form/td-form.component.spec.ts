import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdFormComponent } from './td-form.component';
import { FormsModule } from '@angular/forms';

describe('TdFormComponent', () => {
  let component: TdFormComponent;
  let fixture: ComponentFixture<TdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdFormComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
