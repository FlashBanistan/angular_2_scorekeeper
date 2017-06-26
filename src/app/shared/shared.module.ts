import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SpinnerComponent } from './components/spinner.component';
import { FriendSearchComponent } from './components/search.component';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    SpinnerComponent,
    SearchPipe,
    FriendSearchComponent,
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
  ],
  exports: [
    SpinnerComponent,
    SearchPipe,
    FriendSearchComponent,
  ],
  providers: [],
})


export class SharedModule { }
