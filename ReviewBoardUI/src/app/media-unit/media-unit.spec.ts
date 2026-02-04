import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaUnit } from './media-unit';

describe('MediaUnit', () => {
  let component: MediaUnit;
  let fixture: ComponentFixture<MediaUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaUnit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaUnit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
