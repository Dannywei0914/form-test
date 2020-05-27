import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormProfileEditorTestComponent } from './reactive-form-profile-editor-test.component';

describe('ReactiveFormProfileEditorTestComponent', () => {
  let component: ReactiveFormProfileEditorTestComponent;
  let fixture: ComponentFixture<ReactiveFormProfileEditorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormProfileEditorTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormProfileEditorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
