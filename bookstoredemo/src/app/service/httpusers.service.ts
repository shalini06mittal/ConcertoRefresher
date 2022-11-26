import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../model/User';
import { Router } from '@angular/router';

/**
 * Service class responsible for all requests to Users url
 * and implement login and logout functionality
 */
@Injectable({
  providedIn: 'root'
})
export class HttpusersService {

  // base url
  url:string ='';
  /**
   * 
   * @param http used to make HTTP requests
   * @param route to redirect to a certain url
   */
  constructor() {
    
   }
   
  /**
   * When user clicks on logout, remove the username from local storage as session need not be tracked
   * and redirect to the login / home page
   */
  logout()
  {
   
  }
  /**
   * 
   * @returns returns whether user is currently logged in or not
   */
  isLoggedIn()
  {
    
  }
  /**
   * 
   * @param username the credential entered by the user in login form
   * @param password the credential entered by the user in login form
   * @returns true if credentials are valid else returns false
   */
  loginUser(user:User):boolean
  {
     return false;
    
  }
  /**
   * 
   * @param user new user object to register and send a POST request
   * @returns 
   */
  insertUser(user:User){
   
  }
}
