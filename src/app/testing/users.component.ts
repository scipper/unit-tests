import {Component} from '@angular/core';
import {of} from 'rxjs';
import {BackendService} from './backend.service';

@Component({
  selector: 'app-users',
  template: ''
})
export class UsersComponent {

  constructor(private backendService: BackendService) {
  }

  getUsers() {
    return of([] as any[]);
  }

}
