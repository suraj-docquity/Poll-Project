import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/service/data-service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
})
export class PollComponent {
  message: any;
  pollData: any;
  optionRes: any;

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
      },
      (error) => {
        console.log(error);
      }
    );


  }
}
