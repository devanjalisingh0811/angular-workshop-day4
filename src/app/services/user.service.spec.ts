import { async, TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('UserService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    })
    .compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UserService(<any>httpClientSpy);
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('search should return users', () => {
    //let device = new Device(1, "!2", "12", "name");
    httpClientSpy.get.and.returnValue(of(12,2));

    service.getUser();
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

});
