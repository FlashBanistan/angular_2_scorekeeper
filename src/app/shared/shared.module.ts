// ANGULAR IMPORTS
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// COMPONENTS
import { SpinnerComponent } from './components/spinner.component';
import { FriendSearchComponent } from './components/search.component';

// PIPES
import { SearchPipe } from './pipes/search.pipe';


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
