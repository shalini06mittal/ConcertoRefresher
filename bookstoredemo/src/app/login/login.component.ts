import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { HttpbooksService } from '../service/httpbooks.service';
import { HttpusersService } from '../service/httpusers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(user:User): void {
    
  }
}
