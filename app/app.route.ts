/**
 * Created by CYF on 16/8/20.
 */
import { Routes, RouterModule } from '@angular/router';

import {HeroComponent} from "./hero.component";


const appRoutes: Routes = <Routes>[
    {
        path: 'heroes',
        component: HeroComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);