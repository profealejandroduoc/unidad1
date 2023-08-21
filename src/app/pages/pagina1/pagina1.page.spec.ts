import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pagina1Page } from './pagina1.page';

describe('Pagina1Page', () => {
  let component: Pagina1Page;
  let fixture: ComponentFixture<Pagina1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pagina1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
