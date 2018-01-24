import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameLogicComponent } from './game-logic/game-logic.component';
import { GameLocationComponent } from './game-location/game-location.component';
import { GameImageComponent } from './game-image/game-image.component';
import { GameTextComponent } from './game-text/game-text.component';


@NgModule({
  declarations: [
    AppComponent,
    GameLogicComponent,
    GameLocationComponent,
    GameImageComponent,
    GameTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
