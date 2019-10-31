import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SongService} from '../song.service';
import {SongToName} from '../songToName';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css']
})
export class SongSearchComponent implements OnInit {

  inputItemFormControl: FormControl;
  songToNames: SongToName[];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.inputItemFormControl = new FormControl('');
  }

  onSearchFieldChange(text: string): void {
    // console.log(text);
    this.songService.getSongsMap(text)
      .subscribe(data => this.songToNames = data);
  }
}
