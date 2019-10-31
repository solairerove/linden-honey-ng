import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Song} from './song';
import {SongToName} from './songToName';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) {
  }

  public defaultSong(): Observable<Song> {
    return this.httpClient.get<Song>(`${environment.songURL}/85100cfc-bc5e-422e-bcb6-a32ee66c13eb`);
  }

  public getSongsMap(title: string): Observable<SongToName[]> {
    return this.httpClient.get<SongToName[]>(`${environment.songURL}?name=${title}`);
  }
}
