
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { MerchpostsComponent } from '../../modules/merchposts/merchposts.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    MerchpostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
  ]
})
export class DefaultModule { }
