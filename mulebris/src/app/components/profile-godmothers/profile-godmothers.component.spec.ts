import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGodmothersComponent } from './profile-godmothers.component';

describe('ProfileGodmothersComponent', () => {
  let component: ProfileGodmothersComponent;
  let fixture: ComponentFixture<ProfileGodmothersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGodmothersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGodmothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
