import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { DemoComponent } from './demo/demo.component';
import { Page404Component } from './page404/page404.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

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
        component: ContactComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'demo',
        component: DemoComponent
      },
      // enviamos un parametro dinamico
      {
        path: 'products/:id',
        component: ProductDetailComponent
      }
    ]
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
