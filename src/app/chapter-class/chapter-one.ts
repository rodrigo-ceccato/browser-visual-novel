import { Choice } from '../models/choice';

class InvItem{
    id: number;
    text: string;

    constructor(id:number, text:string){
        this.id = id;
        this.text = text;
    }
}

export const chapterOne =[
    //0
    {
        gameControl: 0,
        convName: "NO MESSAGE",
        conversation: [],
        personagemImg: "/assets/pictures/chars/char1.png",
        bkgImg: "/assets/pictures/bkg/bkg-room.jpg",
        inventary: [],
        choices:
          [new Choice(1, "Próximo")],
        displayText: "Ei acorde!!!"
    },
   
    //1
    {
      gameControl: 1,
      convName: "mensagem aqui",
      conversation: [],
      personagemImg: "/assets/pictures/chars/char1.png",
      bkgImg: "/assets/pictures/bkg/bkg-room.jpg",
      inventary: [],
      choices:
        [new Choice(2, "Pegar chaves"),
         new Choice(0, "Voltar a dormir")],
      displayText: "Ei acorde! Pegue as chaves do carro."
    },

    //2
    {
        gameControl: 0,
        convName: "mensagem aqui",
        conversation: [],
        personagemImg: "",
        bkgImg: "/assets/pictures/bkg/bkg-room.jpg",
        inventary: [new InvItem(0, "Chaves do carro")],
        choices:
          [new Choice(2, "Deixar chave debaixo da porta")],
        displayText: "[faça uma ação]"
      }
  ];

  