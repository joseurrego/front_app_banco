import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAcmeComponent } from './clientes-acme.component';

describe('ClientesAcmeComponent', () => {
  let component: ClientesAcmeComponent;
  let fixture: ComponentFixture<ClientesAcmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesAcmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesAcmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
