import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosFormComponent } from './casos-form.component';

describe('CasosFormComponent', () => {
  let component: CasosFormComponent;
  let fixture: ComponentFixture<CasosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
