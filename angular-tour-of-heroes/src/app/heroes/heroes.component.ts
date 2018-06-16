import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { trigger, state, style, transition, animate , query, stagger} from '@angular/animations';
import { timeout } from 'rxjs/operators/timeout';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  animations: [trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *',  [
      style({transform: 'translateX(-100%)'}),
      animate(300)
  ])
])]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // heroes: Hero[];
  lengthHero: number;
  constructor(private heroService: HeroService) {
   }

  ngOnInit() {
     this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {this.heroes = heroes;
                          this.lengthHero = this.heroes.length; });
  }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    setTimeout(2000);
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
}
}
