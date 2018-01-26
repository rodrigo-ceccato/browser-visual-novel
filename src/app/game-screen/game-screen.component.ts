import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  personagem = "/assets/pictures/chars/char1.png";
  myBackgroundUrl = "/assets/pictures/bkg/bkg-room.jpg";

  constructor() {

   }

  ngOnInit() {
  }

}
