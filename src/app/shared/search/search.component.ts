import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable }                                     from 'rxjs/Observable';
import { Subject }                                        from 'rxjs/subject';

import { SearchService }                                  from './search.service';

@Component({
  selector: 'search',
  template: `
  <div class="wrapper">
    <input type="text" #box (keyup)="search(box.value)" placeholder="快速搜索"/>
    <ul>
      <li *ngFor="let item of results | async" (click)="goto(item.id); box.value=''">{{item.name}}</li>
    </ul>
  </div>
  `,
  styles: [`
    .wrapper {
      position: relative;
      width: 100%;
    }

    input {
      width: 100%;
      padding: 5px 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    input:focus {
      border-color: #18a689;
    }

    ul {
      visibility: hidden;
      position: absolute;
      width: 100%;
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
  results:Observable<Object[]>;
  private items = new Subject<string>();
  @Input() type:string;
  @Output() select = new EventEmitter<number>();

  constructor(private searchService:SearchService) {}

  ngOnInit():void {
    this.results = this.items.debounceTime(200)
                     .distinctUntilChanged()  // 确保只在过滤条件变化时才发送请求
                     .switchMap(item => item ? this.searchService.search(this.type, item) : Observable.of<Object[]>([]))  // switchMap保留原始的请求顺序，并只返回最近一次http 调用返回的Observable
                     .catch(error => {
                       console.log(error);
                       return Observable.of<Object[]>([])  // 清空搜索结果
                     });
  }

  search(name:string):void {
    this.items.next(name);
  }

  goto(id:number) {
    this.select.emit(id);
    this.items.next('');
  }

}