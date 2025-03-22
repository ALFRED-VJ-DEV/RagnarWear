/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StorePlayerasComponent } from './store-playeras.component';

describe('StorePlayerasComponent', () => {
  let component: StorePlayerasComponent;
  let fixture: ComponentFixture<StorePlayerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorePlayerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePlayerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
