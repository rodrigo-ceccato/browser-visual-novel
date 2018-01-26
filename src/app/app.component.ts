import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  selectedChoice: Choice;

  choices = [new Choice(0, "Escolha A"), new Choice(1, "Escolha B")];

  onSelectChoice(choice: Choice): void {
    this.selectedChoice = choice;
    console.log("Clicked on " + this.selectedChoice.text);
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