import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearClienteComponent } from './form-crear-cliente.component';

describe('FormCrearClienteComponent', () => {
  let component: FormCrearClienteComponent;
  let fixture: ComponentFixture<FormCrearClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCrearClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrearClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
