import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {
  
  ngOnInit(): void {
    this.getHero();
  }

  @Input() hero : Hero; //as this component will recieve it
  
  constructor(private route: ActivatedRoute,//holds information about the route to this instance
    private heroService: HeroService,//gets hero data from the remote server
    private location: Location) //Angular service for interacting with the browser
    {}
    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');//static image of the route 
      //information shortly after the component was created.The JavaScript (+) 
      //operator converts the string to a number,
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
      this.location.back();
    }
    update() : void{
      this.heroService.updateHero(this.hero).subscribe(()=>this.goBack());
    }
}
