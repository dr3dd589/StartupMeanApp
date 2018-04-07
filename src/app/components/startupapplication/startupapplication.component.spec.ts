import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupapplicationComponent } from './startupapplication.component';

describe('StartupapplicationComponent', () => {
  let component: StartupapplicationComponent;
  let fixture: ComponentFixture<StartupapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
