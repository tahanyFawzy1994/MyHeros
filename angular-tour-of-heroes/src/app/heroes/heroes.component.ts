import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes : Hero [];
  // selectedHero : Hero;
  constructor(private heroService :HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero : Hero) :void{
  //   this.selectedHero = hero;
  // }

  getHeroes() :void {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes = heroes);
  }

  add(name :string){
    name = name.trim();
    if(! name) { return ;}
    this.heroService.addHero({name} as Hero)//convert the string to hero object
    .subscribe(hero =>{this.heroes.push(hero)});
  }

  delete(hero :Hero){
    this.heroes.filter(h => h!==hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
