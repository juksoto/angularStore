import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { Page404Component } from './page404/page404.component';
import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './guardians/admin.guard';

const routes: Routes = [
/*Son objetos
  * path: string donde indica la ruta. La url por donde ingresa
  * puede ser sin / o con / -> /home or home
*/

/* redirecciona al componente home si solo se escribe el dominio */
  {
    path: '',
    component: LayoutComponent,
    /* Usamos como layout un componente y asigamos a sus hijos*/
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        // resolvemos un modulo. no un componenten.
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        component: ContactComponent
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        // resolvemos un modulo. no un componenten.
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'demo',
        component: DemoComponent
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
   })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
