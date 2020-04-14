import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserspagesComponent } from './userspages.component';

describe('UserspagesComponent', () => {
  let component: UserspagesComponent;
  let fixture: ComponentFixture<UserspagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserspagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserspagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
