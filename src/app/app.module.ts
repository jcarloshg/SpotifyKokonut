import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewContentInterceptorService } from './pages/view-content/interceptors/view-content-interceptor.service';
import { OnlineStatusModule } from 'ngx-online-status';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OnlineStatusModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ViewContentInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
