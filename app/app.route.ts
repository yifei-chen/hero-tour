/**
 * Created by CYF on 16/8/20.
 */
import { Routes, RouterModule } from '@angular/router';

import {HeroComponent} from "./hero.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";


const appRoutes: Routes = <Routes>[
    {
        path: 'heroes',
        component: HeroComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
];

export const routing = RouterModule.forRoot(appRoutes);