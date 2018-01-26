import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameTextComponent } from './game-text/game-text.component';
import { PhoneComponent } from './phone/phone.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    GameTextComponent,
    PhoneComponent,
    GameScreenComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
