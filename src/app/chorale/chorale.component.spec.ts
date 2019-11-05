import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoraleComponent } from './chorale.component';

describe('ChoraleComponent', () => {
  let component: ChoraleComponent;
  let fixture: ComponentFixture<ChoraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
