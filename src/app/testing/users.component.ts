import {Component} from '@angular/core';
import {BackendService} from './backend.service';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-users',
  template: ''
})
export class UsersComponent {

  constructor(private backendService: BackendService) {
  }

  getUsers() {
    return this.backendService.getUsers().pipe(
      catchError(() => {
        return throwError('Error while getting users');
      })
    );
  }

}
