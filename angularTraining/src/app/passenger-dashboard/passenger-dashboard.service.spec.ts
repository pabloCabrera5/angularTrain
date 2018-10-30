import { TestBed, inject } from '@angular/core/testing';

import { PassengerDashboardService } from './passenger-dashboard.service';

describe('PassengerDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassengerDashboardService]
    });
  });

  it('should be created', inject([PassengerDashboardService], (service: PassengerDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
