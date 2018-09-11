import { TestBed, inject } from '@angular/core/testing';

import { AddserviceService } from './addservice.service';

describe('AddserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddserviceService]
    });
  });

  it('should be created', inject([AddserviceService], (service: AddserviceService) => {
    expect(service).toBeTruthy();
  }));
});
