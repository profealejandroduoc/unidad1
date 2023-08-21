import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pagina2Page } from './pagina2.page';

describe('Pagina2Page', () => {
  let component: Pagina2Page;
  let fixture: ComponentFixture<Pagina2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pagina2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
