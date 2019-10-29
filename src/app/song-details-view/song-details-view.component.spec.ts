import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetailsViewComponent } from './song-details-view.component';

describe('SongDetailsViewComponent', () => {
  let component: SongDetailsViewComponent;
  let fixture: ComponentFixture<SongDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
