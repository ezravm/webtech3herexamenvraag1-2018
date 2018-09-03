import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';



import {Question} from './question';

@Injectable()
export class QuestionService {

askQuestion(question: String): String {

var answers = ["it is certain","it is decidedly so","without a doubt", "yes - definitely","you may rely on it", "as i see it, yes", "most likely", "outlook good", "yes", "signs point to yes", "ask again later", "better not tell you now", "cannot predict now", "concentrate and ask again", "my reply is no", "my sources say no", "outlook not so good", "very doubtful", "reply hazy, try again", "dont count on it"];
var random = Math.floor(Math.random() * 20);;




return answers[random];
}



}
