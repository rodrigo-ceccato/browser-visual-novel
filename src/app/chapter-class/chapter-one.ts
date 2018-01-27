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
          [new Choice(1,"Voltar ao inicio ")],
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
        [new Choice(3, "*olhar para o celular  para verificar horário* "), new Choice(9 ,"Acredito! Eu só não me lembro de nada ... Não consigo me concentrar! Esse zumbido é muito alto onde está o spray contra insetos?")],
      displayText: "[Jogador:] Malditos insetos tem mais deles aqui? eu não vejo nenhum ..\n\n[Esposa:] *brava*:Graças a Deus onde você estava???\n\n[Jogador:]  Eu só sai para botar a chave debaixo do tapete ...\n\n[Esposa:] E demorou 3 horas???\n\n[Jogador:] O que? Se isso é uma brincadeira está na hora de parar. Você esta me assustando ....\n\n[Esposa:] Você deve estar de brincadeira! Eu quase liguei para a polícia!  Você não acredita em mim???"
    },

    //3
    {
        gameControl: 0,
        convName: "Estraho",
        conversation: [" Estranho: trabalho feito, foi bom fazer negócios com você."],
        personagemImg: "",
        bkgImg: "/assets/pictures/bkg/bkg-room.jpg",
        inventary: [new InvItem(0, "")],
        choices:
          [new Choice(4, "continuar")],
        displayText: " "
    },

    //4
    {
        gameControl: 0,
        convName: "",
        conversation: [],
        personagemImg: "",
        bkgImg: "",
        inventary: [new InvItem(0, "")],
        choices: [new Choice(5,"AHHH não aguento mais esse zumbido! Vou falar com o dedetizador e ver se ele já está chegando! "),new Choice(0,"Jogador: Eu preciso saber o que está acontecendo comigo. vou na praça ver se alguém me viu sair do prédio.")],
        displayText: "[Jogador:] O exterminador veio aqui enquanto eu estive fora?\n\n[Esposa:] Que exterminador?  Você está me assustando “nome do jogador”."
    },
    //5
    {
      gameControl: 0,
      convName: "",
      conversation: [],
      personagemImg: "",
      bkgImg: "",
      inventary: [new InvItem(0, "")],
      choices: [new Choice(8,"Se você não vai vir ok! eu não aguento mais essa casa e minha esposa também não vou me mudar. "),new Choice(6,"Ok eu assino!!!  Anda logo")],
      displayText: ".[Jogador:] Que horas você chega ???preciso que você se livre das moscas.\n\n[Estranho;]Já me livrei.\n\n[Jogador:] Elas ainda estão aqui! ainda consigo escutar! \n\n[Estranho:]Isso porque ainda existe algo podre na casa.\n\n[Jogador:] Do que você está falando??? Você nem esteve aqui!!! \n\n[Estranho:] Eu não preciso estar para saber. \n\n[Jogador:] Você quer vir logo pelo amor de deus! Eu preciso me livrar desse maldito zumbido! \n\n[Estranho:] Se livrar das coisas podres tem um preço mais alto ... \n\n[Jogador:] Não me importa eu preciso que o zumbido suma!!! \n\n[Estranho:]Você vai ter que assinar um contrato..."
  },
    //6 Essa é a tela de assinar contrato . como fazemos ?rs 
    {
      gameControl: 0,
      convName: "",
      conversation: [],
      personagemImg: "",
      bkgImg: "",
      inventary: [new InvItem(7, "Assinar contrato")],
      choices: [new Choice(1,"Voltar ao inicio ")],
      displayText: "."
  },
    //7 game over 
    {
      gameControl: 0,
      convName: "",
      conversation: [],
      personagemImg: "",
      bkgImg: "",
      inventary: [new InvItem(0, "")],
      choices: [new Choice(1," Voltar ao inicio")],
      displayText: "Você volta consciência as vezes por alguns segundos ...\n a ultima vez que você acordou você estava cortando a garganta da sua esposa \n GAME OVER"
  },
    //8 tela de ganhar o jogo 
    {
      gameControl: 0,
      convName: "",
      conversation: [],
      personagemImg: "",
      bkgImg: "",
      inventary: [new InvItem(0,"" )],
      choices: [new Choice(1,"Voltar ao inicio ")],
      displayText: "Você se mudou! Parabéns acabaram as moscas !!!"
  },
    //9
    {
      gameControl: 0,
      convName: "",
      conversation: [],
      personagemImg: "",
      bkgImg: "",
      inventary: [new InvItem(0, "" )],
      choices: [new Choice(10,"Preciso do Spray contra insetos!!! Eu posso ouvir elas! Deixa de ser inútil e vai pegar para mim"), new Choice(11,"Tem razão vamos ao médico.*Marque uma consulta* ")],
      displayText: "[Esposa:] Que zumbido? agora que você falou eu não estou vendo nenhuma mosca mesmo ... \n\n[Jogador:] Onde elas foram? droga eu vou ligar para o dedetizador. \n\n[Esposa:]  Que dedetizador? \n\n[Jogador:] Um cara que eu achei online ele vinha dedetizar enquanto eu estava no trabalho. \n\n[Esposa:] Você ia deixar um estranho sozinho na minha casa? \n\n[Jogador:] Ele estava bem recomendado! Nossa, esse zumbido está me dando dor de cabeça eu não consigo pensar.... \n\n[Esposa:] Senta no sofá. você está muito agitado ouvindo coisas e sem memória das últimas 3 horas ... Você não acha melhor ir para o médico? "
  },
    //10 Game Over
    {
      gameControl: 0,
      convName: "",
      conversation: [],
      personagemImg: "",
      bkgImg: "",
      inventary: [new InvItem(0, "Voltar ao inicio")],
      choices: [new Choice(1, "voltar ao inicio")],
      displayText: "Sua mulher te deixou.\n O zumbido nunca para. Você nunca acha as moscas. Quando você não consegue mais suportar você tem uma ideia. Pega uma faca suja dentro da pia fétida lotada de louça e tenta furar seus tímpanos. Você põe pressão demais na faca e morre. GAME OVER"
  },
    //11 
    {
      gameControl: 0,
      convName: "",
      conversation: [],
      personagemImg: "",
      bkgImg: "",
      inventary: [new InvItem(0,"")],
      choices: [new Choice(12,"Se eu ouvir mais um hummmm da sua parte e eu ... " ),new Choice(3, "obrigada pela atenção")],
      displayText: "1 dia depois (Consultório)\n\n---- Após o exame ------\n\n[Médico:] Hummm ... não parece ter nada errado ... estranho .... \n\n[Jogador:] Impossível! eu estou ouvindo um zumbido .... elas só podem estar aí dentro ... \n\n[Médico:] Humm e dês de quando você está ouvindo o zumbido? \n\n[Jogador]Desde antes de ontem ... \n\n[Médico:] E a perda de memória? \n\n[Jogador:] Eu já disse foi logo antes disso\n\n[Médico:] E você tem certeza que não bateu a cabeça ...\n\n[Jogador:]  Eu já disse que tenho!!!!\n\n[Médico:] Hummm você não ingeriu nenhum tipo de alucinógeno?\n\n[Jogador:]Nãooo ¬!!!\n\n[Médico:] Hummm¬"
  },
    //12
    {
      gameControl: 0,
      convName: "",
      conversation: [],
      personagemImg: "",
      bkgImg: "",
      inventary: [new InvItem(0, "")],
      choices: [new Choice(13,"Pegar bisturi")],
      displayText: "[Jogador:]...vou meter a mão na sua cara ... \n\n [Médico :]Sr. “nome do jogador !” \n\n[Jogador:] Ahh esse maldito zumbido !!! me da um bisturi eu mesmo tiro as moscas dai \n\n[Médico:]sr. “nome do jogador “pelo amor de Deus. Não faça nada estupido! \n\n[Jogador:]Aha achei!!!\n\n[Médico:] Achou o quê ??Meu deus chamem a segurança! "
  },
  //13 game over 
  {
    gameControl: 0,
    convName: "",
    conversation: [],
    personagemImg: "",
    bkgImg: "",
    inventary: [new InvItem(1,"bisturi")],
    choices: [new Choice(1, "voltar ao inicio")],
    displayText: "Você foi internado numa clinica psiquiátrica e passou o resto dos seus dias ouvindo o zumbido mesmo sob medicação.\n\n\GAME OVER"
}
  ];

  