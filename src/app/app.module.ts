import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbCardModule, NbInputModule, NbLayoutModule, NbListModule, NbThemeModule} from '@nebular/theme';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SongDetailsViewComponent} from './song-details-view/song-details-view.component';
import {SongDetailsComponent} from './song-details/song-details.component';
import {SongSearchViewComponent} from './song-search-view/song-search-view.component';
import {SongSearchComponent} from './song-search/song-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SongDetailsComponent,
    SongDetailsViewComponent,
    SongSearchComponent,
    SongSearchViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbCardModule,
    NbListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
