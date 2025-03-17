/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OptionMangasComponent } from './option-mangas.component';

describe('OptionMangasComponent', () => {
  let component: OptionMangasComponent;
  let fixture: ComponentFixture<OptionMangasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionMangasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
