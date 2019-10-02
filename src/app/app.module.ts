import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainComponent } from './main/main.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // useClass: AppTranslationService,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    MainComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
