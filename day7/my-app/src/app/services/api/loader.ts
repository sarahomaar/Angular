import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent,HttpHandler,HttpRequest } from "@angular/common/http";
import { finalize, Observable} from "rxjs";
import { LoaderService } from "../loader.service";
@Injectable()
export class loaderInterceptor implements HttpInterceptor{
   constructor(private loaderServ:LoaderService){

   }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       this.loaderServ.show();
        return next.handle(req).pipe(
            finalize(()=>{
                this.loaderServ.hide()
            })
        );
           
    }
}