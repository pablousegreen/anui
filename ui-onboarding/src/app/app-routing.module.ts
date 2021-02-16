import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { MerchpostsComponent } from './modules/merchposts/merchposts.component';

const routes: Routes = [
  {
    path: 'onboarding',
    component: DefaultComponent,
    children: [{ path: '', component: HomeComponent },
                {path: 'merchants', component: MerchpostsComponent}],
  },
  {
    path: 'onboarding',
    component: FullwidthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
