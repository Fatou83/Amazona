import { TestBed } from '@angular/core/testing';

import { Form3Service } from './form3.service';

describe('Form3Service', () => {
  let service: Form3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Form3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
