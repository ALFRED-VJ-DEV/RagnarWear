/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CombinarMangasService } from './combinar-mangas.service';

describe('Service: CombinarMangas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CombinarMangasService]
    });
  });

  it('should ...', inject([CombinarMangasService], (service: CombinarMangasService) => {
    expect(service).toBeTruthy();
  }));
});
