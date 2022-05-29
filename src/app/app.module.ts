import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import { CryptoPageComponent } from './crypto-page/crypto-page.component';
import { HttpClientModule } from "@angular/common/http";
import { CryptoTabComponent } from './crypto-page/components/crypto-tab/crypto-tab.component';
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";
import { environment } from "../environments/environment";

const socketIoConfig: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    CryptoPageComponent,
    CryptoTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    SocketIoModule.forRoot(socketIoConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
