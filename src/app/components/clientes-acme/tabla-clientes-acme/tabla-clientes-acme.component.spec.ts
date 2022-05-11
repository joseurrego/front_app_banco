import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaClientesAcmeComponent } from './tabla-clientes-acme.component';

describe('TablaClientesAcmeComponent', () => {
  let component: TablaClientesAcmeComponent;
  let fixture: ComponentFixture<TablaClientesAcmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaClientesAcmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaClientesAcmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
