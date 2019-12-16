import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [];

@NgModule ({
    imports: [
        //
        RouterModule.forChild(routes)
    ],
    exports: [
        // este modulo sea exportable. Para que otros modulos lo puedan usar.
        RouterModule
    ]
})

export class HomeRoutingModule {}