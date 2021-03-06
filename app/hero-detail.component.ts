/**
 * Created by CYF on 16/8/20.
 */
import { Component, Input,OnInit } from '@angular/core';
import {Hero} from "./model/hero";
import {HeroService} from "./services/hero.service";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'my-hero-detail',
    template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
    <button (click)="goBack()">Back</button>
  </div>
`

})
export class HeroDetailComponent implements OnInit {
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    goBack(): void {
        window.history.back();
    }

    @Input()
    hero: Hero;
}
