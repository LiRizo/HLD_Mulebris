import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSpecialistComponent } from './profile-specialist.component';

describe('ProfileSpecialistComponent', () => {
  let component: ProfileSpecialistComponent;
  let fixture: ComponentFixture<ProfileSpecialistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSpecialistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
