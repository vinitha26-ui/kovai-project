import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/modules/main-layout/components/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('../modules/main-layout/main-layout.module').then(m=> m.MainLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
