import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {Question} from './question';
import {QuestionService} from './question.service';

@Component ({
   selector: 'question',
   templateUrl: './question.component.html'
})

export class QuestionComponent {
    search: FormGroup;
    answer_name: String;

    ngOnInit() {
          this.search = new FormGroup({
            question: new FormControl('')
          });
      }


   constructor(private questionService: QuestionService) {}

   onSubmit() {
    this.answer_name = this.questionService.askQuestion(this.search.value.question)

   }

}
