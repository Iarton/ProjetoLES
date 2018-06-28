import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqtoqueComponent } from './esqtoque.component';

describe('EsqtoqueComponent', () => {
  let component: EsqtoqueComponent;
  let fixture: ComponentFixture<EsqtoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsqtoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqtoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
