import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksAndRunCreateComponent } from './books_and_run_create.component';
import { BooksAndRunPlayComponent } from './books_and_run_play.component';
import {BooksAndRunRootComponent} from "./books_and_run_root.component";


const routes: Routes = [
  {path: '', component: BooksAndRunRootComponent, children: [
    {path: 'create', component: BooksAndRunCreateComponent},
    {path: 'play', component: BooksAndRunPlayComponent},
  ]},
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [ RouterModule ]
})
export class BooksAndRunRouter {};
