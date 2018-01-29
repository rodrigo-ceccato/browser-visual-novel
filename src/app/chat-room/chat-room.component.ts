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

  "Jogador: Oi!  Achei o seu contato na internet no site dizia que você soluciona qualquer problema. Estou com uma infestação de moscas em casa que já dura 3 meses. Já tentei de tudo, inclusive dedetizar 3 vezes, e nada funciona. Minha esposa está até querendo se mudar. Você pode me ajudar? Tem alguma dica?",
  "Estranho: Os métodos comuns não vão funcionar e venenos normais também não. Eu sei como resolver o seu problema.",
  
  "Jogador: Sério? Maravilha!",
  "Estranho: Resolvo. Você só tem que pagar o preço depois que os insetos sumirem. Você aceita esse acordo?",
  "Jogador:Quando você pode vir? Quanto vai custar?",
  "Estranho: Depende do tamanho do problema. amanhã, dou uma solução se a gente entrar num acordo.",
  "Jogador: Amanhã eu trabalho e minha esposa talvez tenha que sair...",
  "Estranho:Complicado... não sei quando vou estar livre de novo.",
  
  "Jogador :semana que vem ?",
  "Estranho:Não ...",
  
  "Jogador: Na outra então?",
  "Estranho: Não ...",
  
  "Jogador: Você está muito exigente com as datas ...",
  "Estranho:Se não quiser fechar contrato é só dizer que eu vou embora.",
  
  "Jogador: Nãããoooo pelo amor de Deus! Eu aceito pagar o preço que você quiser! Então como fazemos isso?",
  "Estranho: Fechado. Tem porteiro no prédio, você pode avisa o que vou fazer. Você deixa a chave debaixo do tapete da porta da frente.",
  
  
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