import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProdComponent } from './criar-prod.component';

describe('CriarProdComponent', () => {
  let component: CriarProdComponent;
  let fixture: ComponentFixture<CriarProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
