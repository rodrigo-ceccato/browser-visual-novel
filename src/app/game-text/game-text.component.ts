import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-text',
  templateUrl: './game-text.component.html',
  styleUrls: ['./game-text.component.css']
})
export class GameTextComponent implements OnInit {
  @Input() textContent:string;

  constructor() { }

  ngOnInit() {
  }

}
