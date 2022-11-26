import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';
import { HttpbooksService } from '../service/httpbooks.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  // books of type Observable of type Book[]

  constructor() { 
    
    }
  /**
   * fetch all the books and display on html page using async pipe
   */
  ngOnInit(): void {
    
  }
  /**
   * 
   * @param id the book id to be added in the wishlist of the user
   * if id already exists display an alert message saying " Book already exixts"
   * else send a PUT request to update the users wishlist
   */
  addToWishList(id:number){
    
    
  }
  /**
   * 
   * @param id the book id to be added in the completed list of the user
   * if id already exists display an alert message saying " Book already exixts"
   * else send a PUT request to update the users completed list
   */
  addToCompletedList(id:number)
  {
    
  }

}
