import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Song} from '../song';
import {SongService} from '../song.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  private song: Observable<Song>;

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.song = this.songService.defaultSong();
  }
}
