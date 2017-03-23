import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/subject';

import { SearchService }     from './search.service';
import { Goods }             from '../type';

@Component({
  selector: 'search',
  template: `
  <div class="wrapper">
    <input type="text" #searchBox (keyup)="search(searchBox.value)" placeholder="快速搜索"/>
    <ul>
      <li *ngFor="let item of goods | async">{{item.name}}</li>
    </ul>
  </div>
  `,
  styles: [`
    .wrapper {
      display: inline-block;
      position: relative;
    }

    input {
      width: 400px;
      padding: 5px 10px;
      font-size: 16px;
      border: 1px solid #e3e3e3;
      box-sizing: border-box;
    }

    input:focus {
      border: 1px solid #18a689;
    }

    ul {
      visibility: hidden;
      position: absolute;
      width: 400px;
      margin: 0;
      padding: 0;
      list-style: none;
      background-color: #18a689;
    }

    input:focus + ul, ul:hover {
      visibility: visible;
    }

    li {
      padding: 2px 5px;
      color: #fff;
      cursor: pointer;
      border-color: #18a689;
      border-style: solid;
      border-width: 0 1px 1px;
    }

    li:hover {
      padding-left: 15px;
      background-color: #fff;
      color: #18a689;
      user-select: none;
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