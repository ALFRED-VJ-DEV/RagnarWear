/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CombinarTirasService } from './combinar-tiras.service';

describe('Service: CombinarTiras', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CombinarTirasService]
    });
  });

  it('should ...', inject([CombinarTirasService], (service: CombinarTirasService) => {
    expect(service).toBeTruthy();
  }));
});
