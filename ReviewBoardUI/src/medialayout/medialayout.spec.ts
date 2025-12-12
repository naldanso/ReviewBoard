import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLayout } from './medialayout';

describe('Medialayout', () => {
  let component: MediaLayout;
  let fixture: ComponentFixture<MediaLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
