// ANGULAR IMPORTS
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// MODULES
import { DashboardRouter } from './dashboard.router';

// COMPONENTS
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRouter,
  ],
  providers: [],
})


export class DashboardModule { }
