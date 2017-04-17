// ANGULAR IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// MODULES
import { AppRouter } from './app.router';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';

// 3rd PARTY MODULES
import { ToastModule } from 'ng2-toastr/ng2-toastr';

// COMPONENTS
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthenticationModule,
    SharedModule,
    AppRouter,
    ToastModule.forRoot(),
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
