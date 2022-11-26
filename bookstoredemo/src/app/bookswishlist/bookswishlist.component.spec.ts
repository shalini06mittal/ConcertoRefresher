import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookswishlistComponent } from './bookswishlist.component';

describe('BookswishlistComponent', () => {
  let component: BookswishlistComponent;
  let fixture: ComponentFixture<BookswishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookswishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookswishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
