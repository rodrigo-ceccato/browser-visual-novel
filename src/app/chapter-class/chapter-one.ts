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
        convName: "Sem mensagem",
        conversation: [],
        personagemImg: "",
        bkgImg: "/assets/pictures/bkg/bkg-room.jpg",
        inventary: [],
        choices:
          [new Choice(1, "Deixa chave")],
        displayText: "[Você fecha o chat e se prepara para deixar a chave sob o tapete]"
    },
   
    //1
    {
    gameControl: 0,
    convName: "Sem mensagem",
    conversation: [],
    personagemImg: "",
    bkgImg: "/assets/pictures/bkg/bkg-room.jpg",
    inventary: [new InvItem(0, "Chave da porta")],
    choices:
      [new Choice(2, "Deixa chave")],
    displayText: "[Você fecha o chat e se prepara para deixar a chave sob o tapete]"
    },

    //2
    {
      //game control 1 inicia zumbido
      gameControl: 1,
      convName: "sem mensagem",
      conversation: [],
      personagemImg: "/assets/pictures/chars/char1.png",
      bkgImg: "/assets/pictures/bkg/bkg-room.jpg",
      inventary: [],
      choices:
        [new Choice(2, "Próximo")],
      displayText: "[Jogador]: malditos insetos tem mais deles aqui? eu não vejo nenhum ..\n\n[Esposa] *brava*:Graças a deus onde você estava???\n\n[Jogador]:  Eu só sai para botar a chave debaixo do tapete ...\n\n[Esposa]: E demorou 3 horas???\n\n[Jogador]: o que? Se isso é uma brincadeira está na hora de parar. você esta me assustando ....\n\n[Esposa]: Você deve estar de brincadeira! Eu quase liguei para a polícia!  Você não acredita em mim???"
    },

    //3
    {
        gameControl: 0,
        convName: "mensagem aqui",
        conversation: [],
        personagemImg: "",
        bkgImg: "/assets/pictures/bkg/bkg-room.jpg",
        inventary: [new InvItem(0, "Chaves do carro")],
        choices:
          [new Choice(2, "Deixar chave"), new Choice(3, "Morrer")],
        displayText: "()"
    },

    //3
    {
        gameControl: 0,
        convName: "",
        conversation: [],
        personagemImg: "",
        bkgImg: "",
        inventary: [new InvItem(0, "Chaves do carro")],
        choices: [],
        displayText: "[GAME OVER]: Você morreu."
    }
  ];

  