import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGodmothersComponent } from './register-godmothers.component';

describe('RegisterGodmothersComponent', () => {
  let component: RegisterGodmothersComponent;
  let fixture: ComponentFixture<RegisterGodmothersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterGodmothersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGodmothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
