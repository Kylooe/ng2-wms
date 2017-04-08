import { Component, OnInit } from '@angular/core';
import { Router}   from '@angular/router';
import { MemberService } from '../member.service';
import { Member } from '../member';


@Component({
	moduleId: module.id,
	selector	: 'memberQuery',
	templateUrl : './member.query.html'
})
export class MemberQueryComponent{
  	members: Member[];
  	member: Member[];
  	submitted: boolean = false;
	constructor(
		private memberService : MemberService,
		private router : Router
	){}
	ngOnInit():void{
		this.memberService.getMembers().then( members => {
			this.members = members;
		})
	}
	onSubmit(id:string):void{
		this.memberService.getMember(id).then( member => {
			this.member = member;
			this.submitted = true;
		})
	}
	look(id:string,flag:boolean):void{
		if(!flag){
			this.router.navigate(['/admin/members/memberDetail',id]);
		}else{
			this.router.navigate(['/admin/members/memberModify',id]);
		}
	}
	delete(item:Member,flag:boolean):void{
		this.memberService.delete(item.id)
		.then(() => {
			if(!flag){
				this.members = this.members.filter((h:Member) => h !== item);
			}else{
				this.member = this.member.filter((h:Member )=> h !== item);
			}	       	        
	    });
	}
}