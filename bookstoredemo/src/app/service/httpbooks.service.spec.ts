import { TestBed } from '@angular/core/testing';

import { HttpbooksService } from './httpbooks.service';

describe('HttpbooksService', () => {
  let service: HttpbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
