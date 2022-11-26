import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';
import { HttpbooksService } from '../service/httpbooks.service';
import { HttpusersService } from '../service/httpusers.service';

@Component({
  selector: 'app-bookscompleted',
  templateUrl: './bookscompleted.component.html',
  styleUrls: ['./bookscompleted.component.css']
})
export class BookscompletedComponent implements OnInit {

  books:Book[]
  constructor() {
    this.books=[];
   }
/**
   * fetch the books user added in completed list and display on the html page
   */
  ngOnInit(): void {
    
  }

}
