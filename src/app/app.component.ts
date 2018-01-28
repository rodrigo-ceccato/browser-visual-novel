import { Component } from '@angular/core';
import { SelectorContext } from '@angular/compiler';
import { Message } from './phone/phone.component';
import { Choice } from './models/choice';
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
  allowChoice = true;

  //audio file
  zumbido = new Audio('../assets/zumbido2.mp3');

  //TODO check if we can remove this
  conversation = [new Message(true, "Bom dia!")];
  convName = "Jamires";
  choices = [];
  inventary = [];


  onSelectChoice(choice: Choice): void {
    if(this.allowChoice == true) {
      this.posicaoCapitulo = choice.id;
      this.updateGameStatus();
    } else {
      console.log("denied try to choice");
    }
  }

  nextChapter(status:string){
    console.log("recebi: " + status);
    this.showChatRoom = false;
    this.showGameImage = true;
    this.showGameHud = true;
    this.capituloAtual = chapterOne;
    // atencao: comeca na posicao UM 1
    this.posicaoCapitulo = 1;
    this.updateGameStatus();
  }

  setChangeStatus(status:string) {
    if(status == "allow"){
      console.log("choices allowed by chid");
      this.allowChoice = true;
    } else if (status == "block") {
      console.log("choices denied by child");
      this.allowChoice = false;
    } else {
      console.log("unexpected input");
      this.allowChoice = true;
    }
  }

  updateGameStatus(){
    this.convName = this.capituloAtual[this.posicaoCapitulo].convName;
    this.conversation = this.capituloAtual[this.posicaoCapitulo].conversation;
    this.personagemImg = this.capituloAtual[this.posicaoCapitulo].personagemImg;
    this.bkgImg = this.capituloAtual[this.posicaoCapitulo].bkgImg;
    this.choices = this.capituloAtual[this.posicaoCapitulo].choices;
    this.displayText = this.capituloAtual[this.posicaoCapitulo].displayText;
    this.inventary = this.capituloAtual[this.posicaoCapitulo].inventary;

    if(this.capituloAtual[this.posicaoCapitulo].gameControl == 1){
      this.zumbido.loop = true;
      this.zumbido.play();
    }

    //work with change chapter
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
