/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TShirtComponent } from './t-Shirt.component';

describe('TShirtComponent', () => {
  let component: TShirtComponent;
  let fixture: ComponentFixture<TShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
