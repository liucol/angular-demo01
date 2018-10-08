import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  msg: string = "这个是自定义属性的方式";
  id = "123";
  h = ""; //一串html字符串结构
  arr = [];
  state = 2;
  inputval: string;

  //服务类
  storage = new StorageService();

  constructor() { 

    console.log(this.storage)
  }

  ngOnInit() {
    this.h = "<h2>这是一个新闻数据结构的html</h2>";
    this.arr = ["111","222", "333"];
  }

  funstate(){
    console.log("您点击啦");
  }

}
