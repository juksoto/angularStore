import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule ({
    imports: [
        //
        RouterModule.forChild(routes),
    ],
    exports: [
        // este modulo sea exportable. Para que otros modulos lo puedan usar.
        RouterModule
    ]
})

export class HomeRoutingModule { }