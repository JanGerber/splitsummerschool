import { Component } from '@angular/core';
import {User} from './User';
import {SearchNameService} from './searchName.service';

@Component({
  selector: 'app-root',
  templateUrl: './searchName.component.html',
  providers: [SearchNameService]
})
export class SearchNameComponent {
  constructor(private userService: SearchNameService) {}

  title = 'app';
  users: User[];

  searchName(name: string) {
    if (name !== '') {
      console.log('Test: ' + name);
      this.userService.getSpecSigners(name)
        .subscribe(
          users => (this.users = users) ,
          err => {
            // Log errors if any
            console.log(err);
          });
    }
  }
  seeAll() {
    console.log('See All ');
    this.userService.getAllSigners()
      .subscribe(
        users => (this.users = users) ,
        err => {
          // Log errors if any
          console.log(err);
        });
  }
}
