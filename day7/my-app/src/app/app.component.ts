import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  // loader:Subject<boolean>
  loader:boolean=false
  constructor(private loaderServ:LoaderService){
    // this.loader=this.loaderServ.loader
    this.loaderServ.loader.subscribe({
      next:(val)=>{
        this.loader=val
      }
    })
  }
}
