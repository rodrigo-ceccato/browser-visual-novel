import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLocationComponent } from './game-location.component';

describe('GameLocationComponent', () => {
  let component: GameLocationComponent;
  let fixture: ComponentFixture<GameLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
