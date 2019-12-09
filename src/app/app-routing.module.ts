import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
/*Son objetos
  * path: string donde indica la ruta. La url por donde ingresa
  * puede ser sin / o con / -> /home or home
*/
  {
    path: 'home',
    component: HomeComponent
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
