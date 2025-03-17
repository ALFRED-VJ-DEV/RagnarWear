/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OptionTirasComponent } from './option-tiras.component';

describe('OptionTirasComponent', () => {
  let component: OptionTirasComponent;
  let fixture: ComponentFixture<OptionTirasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionTirasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionTirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
