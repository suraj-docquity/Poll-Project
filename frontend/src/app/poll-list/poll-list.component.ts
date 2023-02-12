import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/service/data-service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css'],
})
export class PollListComponent {
  response: any;
  pollList: any;
  message: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private data: DataService
  ) {}

  getPollList() {
    return this.http.get('http://localhost:3000/poll').subscribe(
      (res) => {
        this.response = res;
        this.pollList = this.response;
      },
      (error) => {}
    );
  }

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
    this.getPollList();
  }

  get(pollId: number) {
    return this.http.get('http://localhost:3000/poll/' + pollId).subscribe(
      (res) => {
        this.message = res;
        this.data.changeMessage(this.message);
        this.router.navigate(['/poll']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
