import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPluralComponent } from './ng-plural.component';

describe('NgPluralComponent', () => {
  let component: NgPluralComponent;
  let fixture: ComponentFixture<NgPluralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgPluralComponent]
    });
    fixture = TestBed.createComponent(NgPluralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
