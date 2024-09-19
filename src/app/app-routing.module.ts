import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('../modules/main-layout/main-layout.module').then(m=> m.MainLayoutModule)
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withHashLocation()),
  ],
})
export class AppRoutingModule { }
function withHashLocation(): import("@angular/router").RouterFeatures {
  throw new Error('Function not implemented.');
}

