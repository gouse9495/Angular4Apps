import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtBindingComponent } from './evt-binding.component';

describe('EvtBindingComponent', () => {
  let component: EvtBindingComponent;
  let fixture: ComponentFixture<EvtBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvtBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvtBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
