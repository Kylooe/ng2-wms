import { Component, OnInit } from '@angular/core';
import { Member }                                         from '../type';
import { MemberService }                                  from './members.service';

@Component({
  moduleId: module.id,
  selector: 'detail',
  templateUrl: './detail.component.html',
})

export class DetailComponent implements OnInit {
  editable:boolean;  // 切换详情视图与编辑视图
  value:boolean;  // 列表是否需要刷新数据
  options:any;
  member:Member;

  constructor(private service:MemberService) {}

  ngOnInit():void {
    if(this.options.type === 'add') {
      this.member = new Member();
    } else {
      this.service.detail(this.options.id).then(member => this.member = member);
    }
    this.editable = this.options.type === 'detail' ? false : true;
  }

  create():void {
    this.service.create(this.member)
        .then(member => {
          this.member = member;
          this.editable = false;
          this.options.type = 'edit';
          this.value = true;
        });
  }

  update():void {
    this.service.update(this.member)
        .then(() => {
          this.editable = false;
          this.value = true;
        });
  }

  onSubmit():void {
    if(this.options.type==='add') {
      this.create();
    } else {
      this.update();
    }
  }
}