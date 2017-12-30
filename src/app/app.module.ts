import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {MainComponent} from './main/main.component';
import {mockBackendProvider} from './mock-backend.interceptor';
import {MainService} from './main/main.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent
  ],
  providers: [mockBackendProvider, HttpClient, MainService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
