import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLogicComponent } from './game-logic.component';

describe('GameLogicComponent', () => {
  let component: GameLogicComponent;
  let fixture: ComponentFixture<GameLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
