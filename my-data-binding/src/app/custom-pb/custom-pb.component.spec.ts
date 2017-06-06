import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPbComponent } from './custom-pb.component';

describe('CustomPbComponent', () => {
  let component: CustomPbComponent;
  let fixture: ComponentFixture<CustomPbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
