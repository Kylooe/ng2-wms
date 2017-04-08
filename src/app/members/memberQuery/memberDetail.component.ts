import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router}   from '@angular/router';
import { Location }                 from '@angular/common';
import { MemberService } from '../member.service';
import { Member } from '../member';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector	: 'memberDetail',
	templateUrl : './member.detail.html',
	styles      : [`
		#member-detail {
			margin-left: 30px;
			margin-top: 20px;
		}
		#member-detail span{
			display: inline-block;
			width: 250px;
		}
	`]
})
export class MemberDetailComponent{
  	member  : Member;
  	constructor(
	  private memberService: MemberService,
	  private route: ActivatedRoute,
	  private location: Location,
	  private router : Router
	) {}
	ngOnInit(): void {
		this.route.params
		    .switchMap((params: Params) => {
		    	return this.memberService.getMember(params['id']);
		    }).subscribe(member => {
		    	member[0].time = new Date(member[0].time).toLocaleString().replace(/:\d{1,2}$/,' ');
		    	return	this.member = member[0];
		    });

	}
	goBack():void{
		this.location.back();
	}
}