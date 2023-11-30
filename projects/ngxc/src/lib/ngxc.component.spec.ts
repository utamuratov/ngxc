import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxcComponent } from './ngxc.component';

describe('NgxcComponent', () => {
  let component: NgxcComponent;
  let fixture: ComponentFixture<NgxcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxcComponent]
    });
    fixture = TestBed.createComponent(NgxcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
