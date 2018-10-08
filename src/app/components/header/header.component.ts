import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', //使用这个组件的名称
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "这是一个header组件";
  msg: any;
  constructor() { } //构造函数  一初始化就会调用这个方法

  ngOnInit() { //生命周期函数
    this.msg = "";
  }

}
