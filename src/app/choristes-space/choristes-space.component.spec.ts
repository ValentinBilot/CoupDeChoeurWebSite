import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoristesSpaceComponent } from './choristes-space.component';

describe('ChoristesSpaceComponent', () => {
  let component: ChoristesSpaceComponent;
  let fixture: ComponentFixture<ChoristesSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoristesSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoristesSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
