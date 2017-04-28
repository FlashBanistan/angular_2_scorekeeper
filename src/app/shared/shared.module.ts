// ANGULAR IMPORTS
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// COMPONENTS
import { SpinnerComponent } from './spinner/spinner.component';
import { FriendSearchComponent } from './search/search.component';

// PIPES
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    SpinnerComponent,
    SearchPipe,
    FriendSearchComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SpinnerComponent,
    SearchPipe,
    FriendSearchComponent,
  ],
  providers: [],
})


export class SharedModule { }
