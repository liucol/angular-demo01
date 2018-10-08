import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';

//服务类
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
