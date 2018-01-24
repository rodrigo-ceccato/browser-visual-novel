import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTextComponent } from './game-text.component';

describe('GameTextComponent', () => {
  let component: GameTextComponent;
  let fixture: ComponentFixture<GameTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
