/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pokemon_listComponent } from './pokemon_list.component';

describe('Pokemon_listComponent', () => {
  let component: Pokemon_listComponent;
  let fixture: ComponentFixture<Pokemon_listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pokemon_listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pokemon_listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
