import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-text',
  templateUrl: './game-text.component.html',
  styleUrls: ['./game-text.component.css']
})
export class GameTextComponent implements OnInit {

  textContent = "Carla: Ei, está na hora de acordar!";

  constructor() { }

  ngOnInit() {
  }

  updateTextContent(text){
    this.textContent = text;
  }

}
