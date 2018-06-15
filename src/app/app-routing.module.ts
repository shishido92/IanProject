import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
