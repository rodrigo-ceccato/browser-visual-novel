import { Component } from '@angular/core';
import { SelectorContext } from '@angular/compiler';
import { Message } from './phone/phone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  selectedChoice: Choice;
  displayText:string;
  personagemImg: string = "/assets/pictures/chars/char1.png";
  bkgImg: string = "/assets/pictures/bkg/bkg-room.jpg";

  conversation = [new Message(true, "Bom dia!")];
  convName = "Jamires";
  choices = [new Choice(0, "Escolha A"), new Choice(1, "Escolha B")];
  inventary = [new InvItem(0, "Chave da Porta"), new InvItem(1, "Chave do Carro")];


  onSelectChoice(choice: Choice): void {
    this.selectedChoice = choice;
    this.displayText = choice.text;
    console.log("Clicked on " + this.selectedChoice.text);
    this.inventary.push(new InvItem(this.inventary.length, "Adicionou item ao inventario"));
    this.conversation.push(new Message(false, "Adicionou mensagem A"));
    this.conversation.push(new Message(true, "Adicionou mensagem B"));
  }
}

export class Choice {
  id: number;
  text: string;

  constructor(id:number, text:string){
    this.id = id;
    this.text = text;
  }
}

export class InvItem{
  id: number;
  text: string;

  constructor(id:number, text:string){
    this.id = id;
    this.text = text;
  }
}