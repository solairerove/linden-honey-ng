import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Song} from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  SONG_URL = 'http://localhost:8081/songs/85100cfc-bc5e-422e-bcb6-a32ee66c13eb';

  constructor(private httpClient: HttpClient) {
  }

  public defaultSong(): Observable<Song> {
    return this.httpClient.get<Song>(this.SONG_URL);
  }
}
