import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsTestComponent } from './reactive-forms-test.component';

describe('ReactiveFormsTestComponent', () => {
  let component: ReactiveFormsTestComponent;
  let fixture: ComponentFixture<ReactiveFormsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
