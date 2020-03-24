import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesProfileComponent } from './sales-profile.component';

describe('SalesProfileComponent', () => {
  let component: SalesProfileComponent;
  let fixture: ComponentFixture<SalesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
