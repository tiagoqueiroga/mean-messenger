import {Message} from './message';
import {Http,Headers} from '@angular/http';
import {Injectable,EventEmitter} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService{
	messages : Message[] = [];
	messageIsEdit  = new EventEmitter<Message>();
	const hostname = window.location.origin;

	constructor (private _http: Http){
		console.log(this.hostname);
	}

	addMessage(message: Message){
		const body = JSON.stringify(message);
		const headers = new Headers({'Content-Type':'application/json'});
		return this._http.post(this.hostname + '/message',body,{headers:headers})
				.map(response => {
					const data = response.json().obj;
					let message = new Message(data.content,data._id, 'Dummy', null);
					return message;
				})
				.catch(error => Observable.throw(error.json()));
	}

	getMessages(){
		return this._http.get(this.hostname + '/message')
				.map(response=> {
					const data = response.json().obj;
					let objs: any[] = [];
					for(let i=0; i < data.length; i++){
						let message = new Message(data[i].content,data[i]._id, 'Dummy', null);
						objs.push(message);
					}
					return objs;
				})
				.catch(error => Observable.throw(error.json()));
	}

	updateMessage(message:Message){
		const body = JSON.stringify(message);
		const headers = new Headers({'Content-Type':'application/json'});
		this.messages[this.messages.indexOf(message)] = new Message(message.content,null,'Dummy');
		return this._http.patch(this.hostname + '/message/' + message.messageId,body,{headers})
			   .map(response => response.json())
			   .catch(error => Observable.throw(error.json()))
	}

	editMessage(message:Message){
		this.messageIsEdit.emit(message);
	}

	deleteMessage(message:Message){
		this.messages.splice(this.messages.indexOf(message),1);
		return this._http.delete(this.hostname + '/message/' + message.messageId)
			   .map(response => response.json())
			   .catch(error => Observable.throw(error.json()))
	}

}