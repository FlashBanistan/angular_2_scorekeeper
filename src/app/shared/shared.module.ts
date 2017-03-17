// ANGULAR IMPORTS
import { NgModule } from '@angular/core';

// COMPONENTS
import { SpinnerComponent } from './spinner/spinner.component';

// PIPES
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    SpinnerComponent,
    SearchPipe,
  ],
  imports: [
  ],
  exports: [
    SpinnerComponent,
    SearchPipe,
  ],
  providers: [],
})


export class SharedModule { }
