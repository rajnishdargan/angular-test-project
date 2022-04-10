import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-project';
  showModal = true;

  openModal() {
    this.showModal = true;
    console.log('this.showModal', this.showModal);
  }

  closeModal() {
    this.showModal = false;
  }
}
