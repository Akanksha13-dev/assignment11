import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any;
  

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }
  retrieveUsers(element:any): void {
    element.textContent='Refresh Data'
  
    this.usersService.getUsers()
      .subscribe(
        data => {
          this.users = data;
          console.log("Users",data);
        },
        error => {
          console.log(error);
        });
  }


}
