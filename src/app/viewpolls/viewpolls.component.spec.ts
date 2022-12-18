import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpollsComponent } from './viewpolls.component';

describe('ViewpollsComponent', () => {
  let component: ViewpollsComponent;
  let fixture: ComponentFixture<ViewpollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpollsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
