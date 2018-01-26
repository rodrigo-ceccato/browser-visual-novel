import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  @Input() conversation;
  @Input() convName;

  constructor() { }

  ngOnInit() {
  }

}

export class Message {
  text: string;
  player: boolean;

  constructor(player, text){
    this.player = player;
    this.text = text;
  }
}