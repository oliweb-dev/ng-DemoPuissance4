import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private readonly _gameService: GameService) { }

  ngOnInit(): void {
  }

  create() {
    this._gameService.create();
  }

}
