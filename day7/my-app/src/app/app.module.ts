import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundError } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { loaderInterceptor } from './services/api/loader';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:loaderInterceptor,multi:true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
