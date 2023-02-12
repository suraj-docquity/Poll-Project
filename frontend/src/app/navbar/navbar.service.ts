import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  isAdmin = false;

  constructor() { this.isAdmin = false }

  show() {
    this.isAdmin = true
  }

}
