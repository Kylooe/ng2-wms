import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/subject';

import { SearchService }     from './search.service';
import { Goods }             from '../type';

@Component({
  selector: 'search',
  template: `
  <span class="wrapper">
    <input #searchBox (keyup)="search(searchBox.value)" placeholder="快速搜索"/>
    <ul>
      <li *ngFor="let item of goods | async">
        {{item.name}}<span>{{item.quantity}}</span>
      </li>
    </ul>
  </span>
  `,
  styles: [`
    .wrapper {
      position: relative;
    }

    input {
      width: 300px;
      height: 25px;
      line-height: 25px;
      box-sizing: border-box;
      padding-left: 10px;
      border: none;
      border-radius: 12.5px;
    }

    input:focus {
      border: 1px solid #5b7da3;
    }

    ul {
      position: absolute;
      width: 280px;
      left: 10px;
      margin: 0;
      padding: 0;
      list-style: none;
      background-color: #fff;
    }

    li {
      padding: 2px 5px;
      border-width: 0 1px 1px;
      border-color: #5b7da3;
      border-style: solid;
      cursor: normal;
    }

    li:hover {
      background-color: #5b7da3;
      color: #fff;
      user-select: none;
    }

    li span {
      float: right;
    }
  `],
  providers: [ SearchService ]
})

export class SearchComponent implements OnInit {
  goods:Observable<Goods[]>;
  private items = new Subject<string>();

  constructor(private searchService:SearchService) {}

  ngOnInit():void {
    this.goods = this.items.debounceTime(200)
                     .distinctUntilChanged()  // 确保只在过滤条件变化时才发送请求
                     .switchMap(item => item ? this.searchService.search(item) : Observable.of<Goods[]>([]))  // switchMap保留原始的请求顺序，并只返回最近一次http 调用返回的Observable
                     .catch(error => {
                       console.log(error);
                       return Observable.of<Goods[]>([])  // 清空搜索结果
                     });
  }

  search(name:string):void {
    this.items.next(name);
  }

}