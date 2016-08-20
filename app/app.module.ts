import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { HeroComponent }  from './hero.component';
import { HeroService }  from './services/hero.service';
import {HeroDetailComponent} from'./hero-detail.component';
import {routing} from "./app.route";
import {DashboardComponent} from "./dashboard.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeroComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
