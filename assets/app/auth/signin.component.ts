import {Component,OnInit} from '@angular/core';
import {FormBuilder,ControlGroup,Control,Validators} from '@angular/common';

@Component({
	selector:'my-signin',
	template:`
		                <section class="col-md-8 col-md-offset-2">
		                	<form [ngFormModel]="myForm" (ngSubmit)="onSubmit()" >
		                		<div class="form-group">
		                			<label for="email">E-mail</label>
		                			<input [ngFormControl]="myForm.find('email')" type="email" id="email" class="form-control">
		                		</div>

		                		<div class="form-group">
		                			<label for="password">Password</label>
		                			<input [ngFormControl]="myForm.find('password')" type="password" id="password" class="form-control">
		                		</div>
		                		<button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
		                	</form>
		                </section>
	`
})

export class SigninComponent implements OnInit {
	myForm: ControlGroup;

	constructor(private _fb:FormBuilder){}

	onSubmit(){
		console.log(this.myForm.value);
	}

	ngOnInit(){
		this.myForm = this._fb.group({
			email: ['', Validators.compose([
				Validators.required,
				this.isEmail
			])],
			password: ['', Validators.required]
		});
	}

	private isEmail(control: Control):{[s:string]:boolean}{
		if (!control.value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)){
			return {invalidMail:true}
		}
	}
}