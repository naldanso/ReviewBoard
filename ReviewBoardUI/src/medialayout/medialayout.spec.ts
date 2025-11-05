import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Medialayout } from './medialayout';

describe('Medialayout', () => {
  let component: Medialayout;
  let fixture: ComponentFixture<Medialayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medialayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Medialayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
