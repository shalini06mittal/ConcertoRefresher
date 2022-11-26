import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';
import { User } from '../model/User';
import { HttpusersService } from './httpusers.service';
/**
 * Service class responsible for all requests to Books url
 */
@Injectable({
  providedIn: 'root',
})
export class HttpbooksService {
  // base url
  url: string = '';
  /**
   *
   * @param http to make HTTP requests
   * @param us reference to HttpusersService to get the reference of the currently logged in user
   */
  constructor() {}

  /**
   *
   * @returns an observalble to type Book
   */
  getAllBooks(){//: Observable<Book[]> {
    //return ;
  }
  /**
   *
   * @param id to be passed to check if it exists in the wish list
   * @returns true if book id already in the wishlist of user else returns false
   */
  isBookAlreadyInWishList(id: number): boolean {
    return false;
  }
  /**
   *
   * @param id to be passed to check if it exists in the completed list
   * @returns true if book id already in the completed list of user else returns false
   */
  isBookAlreadyInCompletedList(id: number): boolean {
    return false;
  }
  /**
   *
   * @param id the id to be added in the users wish list
   * @returns an observalble of type user to which id the wish list needs to be updated
   */
 // updateWishItem(id: number): Observable<User> {}
  /**
   *
   * @param id the id to be added in the users completed list
   * @returns an observalble of type user to which id the completed list needs to be updated
   */
 // updateCompletedItem(id: number): Observable<User> {}
}
