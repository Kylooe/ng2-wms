import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router}   from '@angular/router';
import { Location }                 from '@angular/common';
import { MemberService } from '../member.service';
import { Member } from '../member';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector	: 'memberCreate',
	templateUrl : '../memberQuery/member.modify.html',
	styles      : [`
		.form-group{
			margin-bottom: 20px;
		}
	`]
})
export class MemberCreateComponent{
  	member: Member= {
        id 				: '3',//先虚拟
	    carPlatNumber	: '',
	    employeeName	: '',
	    carModel		: '',
	    telephone		: '',
	    integral		: 0,
	    mileage			: 0,
	    time			: (new Date()).valueOf(),
	    shopName		: ''
     };
  	flag: boolean = false;
  	constructor(
	  private memberService: MemberService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private router : Router
	) {}
	goBack():void{
		this.location.back();
	}
	save():void{
		this.member.time  = (new Date()).valueOf();
		this.memberService.update(this.member)
    	.then(() => this.goBack());
	}
}