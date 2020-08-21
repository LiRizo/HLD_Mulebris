import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDonationsComponent } from './data-donations.component';

describe('DataDonationsComponent', () => {
  let component: DataDonationsComponent;
  let fixture: ComponentFixture<DataDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
