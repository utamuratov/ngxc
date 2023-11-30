import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_HTTP_BASE_URL } from './core/api-http/api-http-base-url';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: API_HTTP_BASE_URL,
      useValue: 'https://64c922d9b2980cec85c1f725.mockapi.io/api/v1/',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
