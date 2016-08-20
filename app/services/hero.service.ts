/**
 * Created by CYF on 16/8/20.
 */
import { Injectable } from '@angular/core';
import {HEROES} from "../model/mock-hreoes";
import {Hero} from "../model/hero";

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHero(id:Number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}