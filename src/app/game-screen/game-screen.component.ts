import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

  @Input() personagem;
  @Input() myBackgroundUrl;

  constructor() {

   }

  ngOnInit() {
  }

}
