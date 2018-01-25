import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameLogicComponent } from './game-logic/game-logic.component';
import { GameLocationComponent } from './game-location/game-location.component';
import { GameImageComponent } from './game-image/game-image.component';
import { GameTextComponent } from './game-text/game-text.component';
import { PhoneComponent } from './phone/phone.component';


@NgModule({
  declarations: [
    AppComponent,
    GameLogicComponent,
    GameLocationComponent,
    GameImageComponent,
    GameTextComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
