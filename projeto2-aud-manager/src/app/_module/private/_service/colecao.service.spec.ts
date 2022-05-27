import { TestBed } from '@angular/core/testing';

import { ColecaoService } from './colecao.service';

describe('ColecaoService', () => {
  let service: ColecaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColecaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});