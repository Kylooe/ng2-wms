import { Component, OnInit, ViewChild } from '@angular/core';

import { MemberService }                from './members.service';
import { Member }                       from '../type';

import { ModalComponent }               from '../shared/modal/modal.component';
import { DetailComponent }              from './detail.component';

@Component({
  moduleId: module.id,
  selector: 'members',
  host: {
    '[class.modal-open]': 'modal.isOpened'
  },
  templateUrl: './members.component.html',
  styleUrls: ['../stock/goods/goods.component.css']
})

export class MembersComponent implements OnInit {
  @ViewChild(ModalComponent) modal:ModalComponent;
  members:Member[];

  constructor(private service:MemberService) { }

  // 组件创建即获取库存列表
  ngOnInit():void {
    this.service.getList().then(members => this.members = members);
  }

  add() {
    this.modal.open('新增会员', DetailComponent, { type: 'add' });
  }

  edit(id:number) {
    this.modal.open('编辑会员信息', DetailComponent, { type: 'edit', id });
  }

  gotoDetail(id:number) {
    this.modal.open('会员详细资料', DetailComponent, { type: 'detail', id });
  }

  del(member:Member):void {
    this.service.delete(member.id)
        .then(() => {
          this.members = this.members.filter(m => m!==member);
        });
  }

  reload(need:boolean) {
    if(need) this.ngOnInit();
  }
}