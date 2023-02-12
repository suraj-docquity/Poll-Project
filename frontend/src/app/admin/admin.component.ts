import { Component } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private navbarService : NavbarService){}

  ngOnInit(){
    this.navbarService.isAdmin = true;
  }


}
