import { Component } from '@angular/core';
import { SelectorContext } from '@angular/compiler';
import { Message } from './phone/phone.component';
import { chapterOne } from './chapter-class/chapter-one';

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
  showGameHud = false;
  showGameImage = false;
  showChatRoom = true;
  capituloAtual = [];
  posicaoCapitulo: number;
  changeChapter = false;

  conversation = [new Message(true, "Bom dia!")];
  convName = "Jamires";
  choices = [];
  inventary = [];


  onSelectChoice(choice: Choice): void {
    this.posicaoCapitulo = choice.id;
    this.updateGameStatus();
    // this.selectedChoice = choice;
    // this.displayText = "as";
    // this.inventary.push(new InvItem(this.inventary.length, "Adicionou item ao inventario"));
    // this.conversation.push(new Message(false, "Adicionou mensagem A"));
    // this.conversation.push(new Message(true, "Adicionou mensagem B"));
    
  }

  nextChapter(status:string){
    console.log("recebi: " + status);
    this.showChatRoom = false;
    this.showGameImage = true;
    this.showGameHud = true;
    this.capituloAtual = chapterOne;
    this.posicaoCapitulo = 0;
    this.updateGameStatus();
  }

  updateGameStatus(){
    this.convName = this.capituloAtual[this.posicaoCapitulo].convName;
    this.conversation = this.capituloAtual[this.posicaoCapitulo].conversation;
    this.personagemImg = this.capituloAtual[this.posicaoCapitulo].personagemImg;
    this.bkgImg = this.capituloAtual[this.posicaoCapitulo].bkgImg;
    this.choices = this.capituloAtual[this.posicaoCapitulo].choices;
    this.displayText = this.capituloAtual[this.posicaoCapitulo].displayText;
    this.inventary = this.capituloAtual[this.posicaoCapitulo].inventary;
    //work with change chapter
  }
}

export class gameStatus{
  convName: string;
  conversation = [];
  personagemImg: string;
  bkgImg: string;
  displayText: string;
  inventary= [];
  choices = [];
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
