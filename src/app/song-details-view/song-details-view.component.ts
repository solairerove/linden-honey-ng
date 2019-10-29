import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../song';

@Component({
  selector: 'app-song-details-view',
  templateUrl: './song-details-view.component.html',
  styleUrls: ['./song-details-view.component.css']
})
export class SongDetailsViewComponent implements OnInit {

  @Input() song: Song;

  constructor() {
  }

  ngOnInit() {
  }
}
