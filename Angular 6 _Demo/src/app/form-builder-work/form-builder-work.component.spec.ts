import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderWorkComponent } from './form-builder-work.component';

describe('FormBuilderWorkComponent', () => {
  let component: FormBuilderWorkComponent;
  let fixture: ComponentFixture<FormBuilderWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
