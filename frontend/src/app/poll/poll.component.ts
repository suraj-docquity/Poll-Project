import { Component } from '@angular/core';
import { DataService } from 'src/service/data-service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {

  message:any
  pollData : any

  constructor(private data:DataService){}

  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.message=message)
    this.pollData = this.message
  }

}
