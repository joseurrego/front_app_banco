import { TestBed } from '@angular/core/testing';

import { ClientesAcmeService } from './clientes-acme.service';

describe('ClientesAcmeService', () => {
  let service: ClientesAcmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesAcmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
