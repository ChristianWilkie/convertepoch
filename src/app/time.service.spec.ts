import { TestBed } from '@angular/core/testing';

import { TimeService } from './time.service';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return current date', (done: DoneFn) => {
    const priorDate = new Date();
    const result$ = service.currentDate$.subscribe(nextDate => {
      expect(nextDate.getTime()).toBeGreaterThanOrEqual(priorDate.getTime());
      done();
    });
  });
});
