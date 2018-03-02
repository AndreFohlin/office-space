import { TestBed, inject } from '@angular/core/testing';

import { BuildingService } from './building.service';

describe('BuildingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildingService]
    });
  });

  it('should be created', inject([BuildingService], (service: BuildingService) => {
    expect(service).toBeTruthy();
  }));
});
