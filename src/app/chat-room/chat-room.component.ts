import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  @Output() nextChapter = new EventEmitter<any>();

  moment = 0;
  momentoDecisao = false;

  chat = [];
  typeArea = "Nada funciona!! Eu não aguento mais esses insetos!!";

  playerChat = [
    "[Eu] Nada funciona!! Eu não aguento mais esses insetos!!",
    "[Estranho] Já chamou um dedetizador?",

    "Três vezes!!!!",
    "Aquelas lâmpadas de matar insetos costumam funcionar",

    "Já tentei tudo !! já fazem 5 meses! nada funciona! Está me deixando maluco! Minha mulher quer se mudar!",
    "minha avó costumava por uma bacia de agua debaixo de uma lâmpada brilhante os insetos ficavam confusos e se afogavam.",

    "Nada funciona ninguém conhece um veneno mais potente?",
    "Os métodos mais antigos não vão funcionar e venenos normais também não. Eu sei como resolver o seu problema. Trabalho com isso."
  ];

  constructor() { }

  ngOnInit() {
  }

  clickSend(){
    if(this.moment < this.playerChat.length) {
      this.chat.push(new Message(true, this.playerChat[this.moment]));
      this.chat.push(new Message(false, this.playerChat[this.moment+1]));
      this.typeArea = this.playerChat[this.moment+2];
      this.moment += 2;
    }
    
    // end of chat messages
    else {
      console.log("End of chat...");
      this.momentoDecisao = true;
    }
  }

  clickAgree(){
    if(this.momentoDecisao == true){
      this.nextChapter.emit("nextChapter");
    }
  }

  clickDisagree(){
    this.chat.push(new Message(false, "[Estranho deixou o chat]"));
    //TODO colocar tela game over
  }
}

export class Message{
  text:string;
  player:boolean;
  
  constructor(player, text){
    this.player = player;
    this.text = text;
  }
}