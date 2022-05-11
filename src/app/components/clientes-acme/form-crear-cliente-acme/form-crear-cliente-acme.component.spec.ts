import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearClienteAcmeComponent } from './form-crear-cliente-acme.component';

describe('FormCrearClienteAcmeComponent', () => {
  let component: FormCrearClienteAcmeComponent;
  let fixture: ComponentFixture<FormCrearClienteAcmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCrearClienteAcmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrearClienteAcmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
