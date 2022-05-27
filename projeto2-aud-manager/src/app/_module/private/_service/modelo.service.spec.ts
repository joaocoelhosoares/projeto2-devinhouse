import { TestBed } from '@angular/core/testing';

import { ModeloService } from './modelo.service';

describe('ModeloService', () => {
  let service: ModeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
