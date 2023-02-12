import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css'],
})
export class CreatePollComponent {
  newPollData!: FormGroup;
  submitted = false;

  constructor(private fromBuilder: FormBuilder, private http: HttpClient, private router : Router) {}

  ngOnInit() {
    this.newPollData = this.fromBuilder.group({
      question: ['', Validators.required],
      optionA: ['', Validators.required],
      optionB: ['', Validators.required],
      optionC: ['', Validators.required],
      optionD: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.newPollData.invalid) {
      return;
    } else {
      let formData = this.newPollData.value;
      let data = {pollQuestion : formData.question, optA : formData.optionA, optB : formData.optionB, optC : formData.optionC, optD : formData.optionD, status : "Pending"}

      this.http.post('http://localhost:3000/poll', data).subscribe(
        (res) => {
          setTimeout(() => { this.router.navigate(["/admin"]) },500)
        },
        (error) => {
          
        }
      );
    }
  }
}
