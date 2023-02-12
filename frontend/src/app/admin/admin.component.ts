import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  respone : any
  pollData : any

  constructor(private navbarService : NavbarService, private http : HttpClient){}

  getPolls(){
    return this.http.get('http://localhost:3000/poll').subscribe((res) =>{
      
      this.respone = res
      this.pollData = this.respone

    }, (error) =>{
      console.log(error);
    })
  }

  ngOnInit(){
    this.navbarService.isAdmin = true;
    this.getPolls()
  }

}
