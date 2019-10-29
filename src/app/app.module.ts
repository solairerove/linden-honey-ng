import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SongDetailsComponent} from './song-details/song-details.component';
import { SongDetailsViewComponent } from './song-details-view/song-details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SongDetailsComponent,
    SongDetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
