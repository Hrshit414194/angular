import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeResponseComponent } from './take-response.component';

describe('TakeResponseComponent', () => {
  let component: TakeResponseComponent;
  let fixture: ComponentFixture<TakeResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
