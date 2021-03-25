import {UsersComponent} from './users.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {marbles} from 'rxjs-marbles/jasmine';
import {BackendService} from './backend.service';

describe('UsersComponent', () => {

  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let backendServiceSpy: jasmine.SpyObj<BackendService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        {
          provide: BackendService,
          useValue: jasmine.createSpyObj('BackendService', [
            'getUsers'
          ])
        }
      ]
    });

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    backendServiceSpy = TestBed
      .inject(BackendService) as jasmine.SpyObj<BackendService>;
  });

  it('get users from backend', marbles((context) => {
    const users: any[] = [{
      name: 'TestUser'
    }];

    backendServiceSpy.getUsers.and.returnValue(context.cold('a|', {
      a: users
    }));

    let result = {};
    component.getUsers().subscribe((response) => {
      result = response;
    });
    context.flush();

    expect(result).toEqual(users);
  }));

  it('catches api error', marbles((context) => {
    backendServiceSpy.getUsers.and.returnValue(context.cold('#'));

    let errorMessage;
    component.getUsers().subscribe({
      error: (error) => {
        errorMessage = error;
      }
    });
    context.flush();

    expect(errorMessage).toBeDefined();
  }));

});
