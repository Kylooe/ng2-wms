import { Component, OnInit }            from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'breadcrumb',
  template: `
    <ul>
      <li>{{title}}</li>
    </ul>
  `,
  styles: [`
    ul {
      list-style: none;
    }
  `]
 })

export class BreadCurmbComponent implements OnInit {
  title:string;

  constructor(private route:ActivatedRoute) {}

  ngOnInit():void {
    //this.route.data.subscribe((data:Data) => this.title = data['title']);
    this.title = this.route.snapshot.data["title"];
  }
}