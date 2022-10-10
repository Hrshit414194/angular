import { TestBed } from '@angular/core/testing';

import { EventserService } from './eventser.service';

describe('EventserService', () => {
  let service: EventserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
