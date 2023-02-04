import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http'
import{RouterModule} from '@angular/router'


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
