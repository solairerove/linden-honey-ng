import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongSearchViewComponent } from './song-search-view.component';

describe('SongSearchViewComponent', () => {
  let component: SongSearchViewComponent;
  let fixture: ComponentFixture<SongSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
