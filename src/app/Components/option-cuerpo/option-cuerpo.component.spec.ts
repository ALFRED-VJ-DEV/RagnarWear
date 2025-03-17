/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OptionCuerpoComponent } from './option-cuerpo.component';

describe('OptionCuerpoComponent', () => {
  let component: OptionCuerpoComponent;
  let fixture: ComponentFixture<OptionCuerpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionCuerpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionCuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
