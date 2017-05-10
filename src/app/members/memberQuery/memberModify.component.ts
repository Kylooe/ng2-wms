import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router}   from '@angular/router';
import { Location }                 from '@angular/common';
import { MemberService } from '../member.service';
import { Member } from '../member';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector	: 'memberModify',
	templateUrl : './member.modify.html',
	styles      : [`
		.form-group{
			margin-bottom: 20px;
		}
	`]
})
export class MemberModifyComponent{
  	member  : Member;
  	flag: boolean = true;
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
		    	return	this.member = member[0];
		    });
	}
	goBack():void{
		this.location.back();
	}
	save():void{
		this.memberService.update(this.member)
    	.then(() => this.goBack());
	}
}