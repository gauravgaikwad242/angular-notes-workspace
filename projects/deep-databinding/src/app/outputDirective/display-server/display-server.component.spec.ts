import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayServerComponent } from './display-server.component';

describe('DisplayServerComponent', () => {
  let component: DisplayServerComponent;
  let fixture: ComponentFixture<DisplayServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
