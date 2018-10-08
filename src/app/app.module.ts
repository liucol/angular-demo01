import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';

//服务类
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [   //引入组件
    AppComponent,
    HeaderComponent,
    NewsComponent,
  ],
  imports: [  //引入的依赖
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],  //引入服务
  bootstrap: [AppComponent]  //默认执行的组件
})
export class AppModule { }
