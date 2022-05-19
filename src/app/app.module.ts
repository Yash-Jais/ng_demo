import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { YoutubeModule } from './youtube/youtube.module';
import { HighlighterDirective } from './highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    HighlighterDirective,
    
  ],
  imports: [
    BrowserModule,
    YoutubeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /* constructor(){
    console.log("Hello from Module.ts");
  } */
 }
