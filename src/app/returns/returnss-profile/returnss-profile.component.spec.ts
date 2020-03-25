import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnssProfileComponent } from './returnss-profile.component';

describe('ReturnssProfileComponent', () => {
  let component: ReturnssProfileComponent;
  let fixture: ComponentFixture<ReturnssProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnssProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnssProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
