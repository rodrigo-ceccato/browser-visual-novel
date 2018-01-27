import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-text',
  templateUrl: './game-text.component.html',
  styleUrls: ['./game-text.component.css']
})
export class GameTextComponent implements OnInit {
  @Input() textContent:string;
  @Output() setChangeStatus = new EventEmitter<any>();

  // todo: check if this niciaization is necessary
  textDisplay = "no text";
  numberOfDialogues = 1;
  disDialNumber = 0;
  showNextButton = false;
  arrayOfDialogues = [];

  constructor() { }

  ngOnChanges() {
    this.numberOfDialogues = 1;
    this.disDialNumber = 0;
    this.formatText();
  }  

  ngOnInit() {

  }

  // formats the text input, to display it nicely using thheh
  // next button :-)
  public formatText(){
    for(let i = 0; i < this.textContent.length; i++){
      if(this.textContent[i] == '[') {
        this.numberOfDialogues += 1;
      }
    }

    if(this.numberOfDialogues <= 1) {
      this.showNextButton = false;
      this.textDisplay = this.textContent;
      this.allowChange();

    } else {
      this.showNextButton = true;
      this.blockChange();
      this.arrayOfDialogues = this.textContent.split("[");

      // this removes the first empty '['
      this.clickNext();
      this.clickNext();
    }
  
  }

  clickNext(){
    //todo: check if this first condition is necessary
    if(this.arrayOfDialogues.length <= this.disDialNumber){
      //at the end, remove the next button
      this.showNextButton = false;
      this.allowChange();

    } else {
      this.numberOfDialogues -= 1;
      this.textDisplay = "[" + this.arrayOfDialogues[this.disDialNumber];
      this.disDialNumber += 1;

      if(this.numberOfDialogues == 0) {
        this.showNextButton = false;
        this.allowChange();
      }
    }
  }

  allowChange() {
    this.setChangeStatus.emit("allow");
  }

  blockChange() {
    this.setChangeStatus.emit("block");
  }

}
