import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChansonsdavrilComponent } from './chansonsdavril.component';

describe('ChansonsdavrilComponent', () => {
  let component: ChansonsdavrilComponent;
  let fixture: ComponentFixture<ChansonsdavrilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChansonsdavrilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChansonsdavrilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
