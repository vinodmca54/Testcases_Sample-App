import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})

export class UserComponentComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: any;

  ngOnInit() {

     this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(`users ${JSON.stringify(users)}`);
    });
  }

}
