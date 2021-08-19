import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  user:User={
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
  message='';

  // Added
  Role=[{key:1,name:'Admin'},{key:2,name:'Subscriber'},{key:0,name:'SuperAdmin'}];
  CustomerName=[{id:1,name:'Ankit'},{id:2,name:'Ritika'},{id:3,name:'Priyam'},{id:4,name:'Priya'},{id:5,name:'Garima'}];

  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getUserD(this.route.snapshot.paramMap.get('id'));
  }
  getUserD(id:any): void {
    
    
    this.usersService.getUser(id)
      .subscribe(
        data => {
          this.user = data;
          const date=new Date(data.datetime);
          this.user.datetime=date.toISOString().slice(0,-5);
          //console.log("User by id ",this.user);
        },
        error => {
          console.log(error);
        });
  }

  update(): void {
    this.usersService.editUser(this.user.id, this.user)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The user was updated successfully!';
          
        },
        error => {
          console.log(error);
        });
  }

  delete(): void {
    this.usersService.deleteUser(this.user.id)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The user was deleted successfully!';
        },
        error => {
          console.log(error);
        });
  }

}
