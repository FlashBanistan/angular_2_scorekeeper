import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksAndRunCreateComponent } from './books_and_run_create.component';
import { BooksAndRunPlayComponent } from './books_and_run_play.component';
import {BooksAndRunComponent} from "./books_and_run.component";


const routes: Routes = [
  {path: '', component: BooksAndRunComponent, children: [
    {path: 'create', component: BooksAndRunCreateComponent},
    {path: 'play', component: BooksAndRunPlayComponent},
  ]},
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [
    RouterModule,
  ]
})


export class BooksAndRunRouter {};
