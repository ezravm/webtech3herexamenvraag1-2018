"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var QuestionService = (function () {
    function QuestionService() {
    }
    QuestionService.prototype.askQuestion = function (question) {
        var answers = ["it is certain", "it is decidedly so", "without a doubt", "yes - definitely", "you may rely on it", "as i see it, yes", "most likely", "outlook good", "yes", "signs point to yes", "ask again later", "better not tell you now", "cannot predict now", "concentrate and ask again", "my reply is no", "my sources say no", "outlook not so good", "very doubtful", "reply hazy, try again", "dont count on it"];
        var random = Math.floor(Math.random() * 20);
        ;
        return answers[random];
    };
    return QuestionService;
}());
QuestionService = __decorate([
    core_1.Injectable()
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map