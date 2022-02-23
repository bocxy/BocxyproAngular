import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingLayoutRoutes } from './landing.routing';
import { LandingComponent } from 'src/app/layouts/landingpage/landing.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LandingLayoutRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [
    LandingComponent,
   
  ]
})
export class LandingLayoutModule { }
