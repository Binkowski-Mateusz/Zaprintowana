import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMenuBar } from './button-menu-bar';

describe('ButtonMenuBar', () => {
  let component: ButtonMenuBar;
  let fixture: ComponentFixture<ButtonMenuBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMenuBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMenuBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
