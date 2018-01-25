import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  personagem = "https://s-media-cache-ak0.pinimg.com/originals/1e/d2/09/1ed2095bd7b2e32469b336f5333e9c1a.png";
  selectedBkg = "/assets/pictures/bkg/no-bkg.jpg";

  constructor() { }

  ngOnInit() {
  }

}
