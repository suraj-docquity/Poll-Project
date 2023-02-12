import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/service/data-service';
import { v4 as uuid } from 'uuid';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
})
export class PollComponent {
  message: any;
  pollData: any;
  optionRes: any;
  option1:any
  option2:any
  option3:any
  option4:any
  totalVotes:any=0

  options = {"optA" : 1, "optB" : 2, "optC" : 3, "optD" : 4,}

  constructor(private data: DataService, private http: HttpClient) {}

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
    this.pollData = this.message;
   
  }

  userResponse(optID: number) {
    let userID = uuid();
    let userAnswer = { pollID: this.message.pollID, optionID: optID};

    this.http.post('http://localhost:3000/option-counter', userAnswer).subscribe(
      (res) => {
        this.optionRes = res
        console.log(this.optionRes);
        this.option1=Math.floor(this.optionRes.countOptA/this.optionRes.totalResponse *100) ?? 0;
        this.option2=Math.floor(this.optionRes.countOptB/this.optionRes.totalResponse *100)??0;
        this.option3=Math.floor(this.optionRes.countOptC/this.optionRes.totalResponse *100)??0;
        this.option4=Math.floor(this.optionRes.countOptD/this.optionRes.totalResponse *100)??0; 
        console.log(this.option1," ",this.option2," ",this.option3," ",this.option4)
         this.totalVotes=this.optionRes.totalResponse
         console.log(this.totalVotes)


      },
      (error) => {
        console.log(error);
      }
    );


  }
}
