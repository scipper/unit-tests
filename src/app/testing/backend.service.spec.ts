import {BackendService} from './backend.service';
import {TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {of} from 'rxjs';

describe('BackendService', () => {

  let service: BackendService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        BackendService,
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient', ['get'])
        }
      ]
    });

    service = TestBed.inject(BackendService);
    httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  describe('#getUsers', () => {

    it('calls get users api', () => {
      service.getUsers();

      expect(httpSpy.get).toHaveBeenCalledWith('/users');
    });

    it('gets user from api', () => {
      const users: any[] = [{
        name: 'TestUser'
      }];
      httpSpy.get.and.returnValue(of(users));

      service.getUsers().subscribe((response) => {
        expect(response).toEqual(users);
      });
    });

  });

});
