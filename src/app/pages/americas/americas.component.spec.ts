import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericasComponent } from './americas.component';

describe('AmericasComponent', () => {
  let component: AmericasComponent;
  let fixture: ComponentFixture<AmericasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
