import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { HttpusersService } from '../service/httpusers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }
  onSubmit(user:User)
  {

  }

}
