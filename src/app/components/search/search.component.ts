import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  termino: string;
  heroes: Heroe[] = [];

  constructor( private _activatedRoute: ActivatedRoute, private _router: Router, private _heroesService: HeroesService) { 
    
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params =>{
      this.termino = params['busqueda'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    })
  }

  verHeroe(idx: number){
    this._router.navigate(['/heroe',idx]);
  }

}
