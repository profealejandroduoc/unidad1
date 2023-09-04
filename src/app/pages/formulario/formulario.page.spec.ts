import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioPage } from './formulario.page';

describe('FormularioPage', () => {
  let component: FormularioPage;
  let fixture: ComponentFixture<FormularioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
