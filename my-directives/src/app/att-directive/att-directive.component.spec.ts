import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttDirectiveComponent } from './att-directive.component';

describe('AttDirectiveComponent', () => {
  let component: AttDirectiveComponent;
  let fixture: ComponentFixture<AttDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
