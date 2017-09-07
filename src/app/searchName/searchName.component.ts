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
  public signers: User[];

  public searchName(name: string) {
    if (name !== '') {
      console.log('Test: ' + name);
      this.userService.getSpecSigners(name)
        .subscribe(
          res => (this.signers = res.signers, console.log(res)) ,
          err => {
            // Log errors if any
            console.log(err);
          });
    }
  }
  public seeAll() {
    console.log('See All ');
    this.userService.getAllSigners()
      .subscribe(
        res => (this.signers = res.signers,console.log(res)) ,
        err => {
          // Log errors if any
          console.log(err);
        });
  }
}
