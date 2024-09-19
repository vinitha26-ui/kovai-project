import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('../modules/main-layout/main-layout.module').then(m=> m.MainLayoutModule)
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
