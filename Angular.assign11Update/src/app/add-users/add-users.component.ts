import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  
  user:User = {

    id: '',
    first__name: '',
    middle__name:'',
    last__name: '',
    email: '',
    phone_number: '',
    role: '',
    address: '',
    datetime:'',
    customer_Name:''
  }
  submitted = false;

  // Added
  Role=[{key:1,name:'Admin'},{key:2,name:'Subscriber'},{key:0,name:'SuperAdmin'}];
  CustomerName=[{id:1,name:'Ankit'},{id:2,name:'Ritika'},{id:3,name:'Priyam'},{id:4,name:'Priya'},{id:5,name:'Garima'}];
  
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    
    console.log("Added",this.user);
    this.usersService.addUser(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {

      id: '',
      first__name: '',
      middle__name:'',
      last__name: '',
      email: '',
      phone_number: '',
      role: '',
      address: '',
      datetime:'',
      customer_Name:''
    };
  }
  

}
