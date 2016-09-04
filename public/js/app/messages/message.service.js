"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var message_1 = require('./message');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/message', body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            var message = new message_1.Message(data.content, data._id, 'Dummy', null);
            return message;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.getMessages = function () {
        return this._http.get('http://localhost:3000/message')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var message = new message_1.Message(data[i].content, data[i]._id, 'Dummy', null);
                objs.push(message);
            }
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messages[this.messages.indexOf(message)] = new message_1.Message('Edited', null, 'Dummy');
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiwyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUczQztJQUdDLHdCQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUZoQyxhQUFRLEdBQWUsRUFBRSxDQUFDO0lBRzFCLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsT0FBZ0I7UUFDMUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFDLElBQUksRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQzthQUMzRSxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1osSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUM7YUFDbkQsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNaLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFlO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLGlCQUFPLENBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxPQUFPLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE9BQWU7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXZDRjtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBeUNiLHFCQUFDO0FBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtBQXhDWSxzQkFBYyxpQkF3QzFCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHtIdHRwLkhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNle1xuXHRtZXNzYWdlcyA6IE1lc3NhZ2VbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKXtcblx0fVxuXG5cdGFkZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSl7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnLGJvZHkse2hlYWRlcnM6aGVhZGVyc30pXG5cdFx0XHRcdC5tYXAocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuXHRcdFx0XHRcdGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZGF0YS5jb250ZW50LGRhdGEuX2lkLCAnRHVtbXknLCBudWxsKTtcblx0XHRcdFx0XHRyZXR1cm4gbWVzc2FnZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG5cdH1cblxuXHRnZXRNZXNzYWdlcygpe1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnKVxuXHRcdFx0XHQubWFwKHJlc3BvbnNlPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuXHRcdFx0XHRcdGxldCBvYmpzOiBhbnlbXSA9IFtdO1xuXHRcdFx0XHRcdGZvcihsZXQgaT0wOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdFx0XHRsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGRhdGFbaV0uY29udGVudCxkYXRhW2ldLl9pZCwgJ0R1bW15JywgbnVsbCk7XG5cdFx0XHRcdFx0XHRvYmpzLnB1c2gobWVzc2FnZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBvYmpzO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcblx0fVxuXG5cdGVkaXRNZXNzYWdlKG1lc3NhZ2U6TWVzc2FnZSl7XG5cdFx0dGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSldID0gbmV3IE1lc3NhZ2UoJ0VkaXRlZCcsbnVsbCwnRHVtbXknKTtcblx0fVxuXG5cdGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTpNZXNzYWdlKXtcblx0XHR0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksMSk7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
