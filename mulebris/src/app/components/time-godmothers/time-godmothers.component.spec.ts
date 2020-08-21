import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeGodmothersComponent } from './time-godmothers.component';

describe('TimeGodmothersComponent', () => {
  let component: TimeGodmothersComponent;
  let fixture: ComponentFixture<TimeGodmothersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeGodmothersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeGodmothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
