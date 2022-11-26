import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookscompletedComponent } from './bookscompleted.component';

describe('BookscompletedComponent', () => {
  let component: BookscompletedComponent;
  let fixture: ComponentFixture<BookscompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookscompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookscompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
