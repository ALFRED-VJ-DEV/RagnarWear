/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CombinarComponent } from './combinar.component';

describe('CombinarComponent', () => {
  let component: CombinarComponent;
  let fixture: ComponentFixture<CombinarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
