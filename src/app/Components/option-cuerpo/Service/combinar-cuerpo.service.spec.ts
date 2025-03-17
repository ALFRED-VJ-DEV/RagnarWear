/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CombinarCuerpoService } from './combinar-cuerpo.service';

describe('Service: CombinarCuerpo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CombinarCuerpoService]
    });
  });

  it('should ...', inject([CombinarCuerpoService], (service: CombinarCuerpoService) => {
    expect(service).toBeTruthy();
  }));
});
