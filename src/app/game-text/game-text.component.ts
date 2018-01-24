import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-text',
  templateUrl: './game-text.component.html',
  styleUrls: ['./game-text.component.css']
})
export class GameTextComponent implements OnInit {

  textContent = "Hey,I Work!";

  constructor() { }

  ngOnInit() {
  }

  updateTextContent(text){
    this.textContent = text;
  }

}
