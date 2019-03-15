import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { of, throwError } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService:UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test ngOnInit', () => {
    spyOn(userService, 'getUser').and.returnValue(of([1,2,3]));

    component.ngOnInit();
    expect(component.users).toBeDefined();
    expect(component.users.length).toEqual(3);
    expect(component.users[0]).toEqual(1);
    
    expect(userService.getUser).toHaveBeenCalled();
    expect(userService.getUser).toHaveBeenCalledTimes(1);
  });

  it('should throw an error on while connecting with userService', () => {
    spyOn(userService, 'getUser').and.returnValue(throwError("User not found"));
    component.ngOnInit();
    expect(component.users).toBeUndefined();
  });
});
