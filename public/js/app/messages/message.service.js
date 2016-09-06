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
        this.messageIsEdit = new core_1.EventEmitter();
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
    MessageService.prototype.updateMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.messages[this.messages.indexOf(message)] = new message_1.Message(message.content, null, 'Dummy');
        return this._http.patch('http://localhost:3000/message/' + message.messageId, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messageIsEdit.emit(message);
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this._http.delete('http://localhost:3000/message/' + message.messageId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBc0MsZUFBZSxDQUFDLENBQUE7QUFDdEQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiwyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUczQztJQUlDLHdCQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUhoQyxhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQUksSUFBSSxtQkFBWSxFQUFXLENBQUM7SUFHN0MsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUMxQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUMsSUFBSSxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDO2FBQzNFLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUks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QUFjLGlCQXFEMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQge0h0dHAsSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGUsRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNle1xuXHRtZXNzYWdlcyA6IE1lc3NhZ2VbXSA9IFtdO1xuXHRtZXNzYWdlSXNFZGl0ICA9IG5ldyBFdmVudEVtaXR0ZXI8TWVzc2FnZT4oKTtcblxuXHRjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCl7XG5cdH1cblxuXHRhZGRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2Upe1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pO1xuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlJyxib2R5LHtoZWFkZXJzOmhlYWRlcnN9KVxuXHRcdFx0XHQubWFwKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcblx0XHRcdFx0XHRsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGRhdGEuY29udGVudCxkYXRhLl9pZCwgJ0R1bW15JywgbnVsbCk7XG5cdFx0XHRcdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuXHR9XG5cblx0Z2V0TWVzc2FnZXMoKXtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlJylcblx0XHRcdFx0Lm1hcChyZXNwb25zZT0+IHtcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcblx0XHRcdFx0XHRsZXQgb2JqczogYW55W10gPSBbXTtcblx0XHRcdFx0XHRmb3IobGV0IGk9MDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdFx0bGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShkYXRhW2ldLmNvbnRlbnQsZGF0YVtpXS5faWQsICdEdW1teScsIG51bGwpO1xuXHRcdFx0XHRcdFx0b2Jqcy5wdXNoKG1lc3NhZ2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gb2Jqcztcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG5cdH1cblxuXHR1cGRhdGVNZXNzYWdlKG1lc3NhZ2U6TWVzc2FnZSl7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cdFx0dGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSldID0gbmV3IE1lc3NhZ2UobWVzc2FnZS5jb250ZW50LG51bGwsJ0R1bW15Jyk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlLycgKyBtZXNzYWdlLm1lc3NhZ2VJZCxib2R5LHtoZWFkZXJzfSlcblx0XHRcdCAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdFx0ICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSlcblx0fVxuXG5cdGVkaXRNZXNzYWdlKG1lc3NhZ2U6TWVzc2FnZSl7XG5cdFx0dGhpcy5tZXNzYWdlSXNFZGl0LmVtaXQobWVzc2FnZSk7XG5cdH1cblxuXHRkZWxldGVNZXNzYWdlKG1lc3NhZ2U6TWVzc2FnZSl7XG5cdFx0dGhpcy5tZXNzYWdlcy5zcGxpY2UodGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpLDEpO1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UvJyArIG1lc3NhZ2UubWVzc2FnZUlkKVxuXHRcdFx0ICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0XHQgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKVxuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
