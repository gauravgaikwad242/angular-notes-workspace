import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputServerComponent } from './input-server.component';

describe('InputServerComponent', () => {
  let component: InputServerComponent;
  let fixture: ComponentFixture<InputServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
