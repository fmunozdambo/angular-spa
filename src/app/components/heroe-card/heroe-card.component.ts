import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() index: number;

  @Output() selectedHeroe: EventEmitter<number>;

  constructor(private _router: Router) { 
    this.selectedHeroe = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.selectedHeroe.emit(this.index);
  }

}
