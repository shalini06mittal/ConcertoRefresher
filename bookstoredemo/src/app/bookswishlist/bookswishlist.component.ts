import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { HttpbooksService } from '../service/httpbooks.service';
import { HttpusersService } from '../service/httpusers.service';

@Component({
  selector: 'app-bookswishlist',
  templateUrl: './bookswishlist.component.html',
  styleUrls: ['./bookswishlist.component.css']
})
export class BookswishlistComponent implements OnInit {

  books:Book[];
  constructor() { 
    this.books = [];
  }
  /**
   * fetch the books user added in wish list and display on the html page
   */
  ngOnInit(): void {
    
      
    }

}
