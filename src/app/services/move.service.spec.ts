import { TestBed } from '@angular/core/testing';

import { MoveService } from './move.service';

describe('MoveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoveService = TestBed.get(MoveService);
    expect(service).toBeTruthy();
  });
});
