import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash-es';
import {data} from './data';
import { NgForm } from '@angular/forms';
import * as uuid from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-test-project';
  showModal = false;
  userData: any[] = [];
  selectedUserIds = [];

  onUserAdd(form: NgForm) {
    if (form.invalid) {
      alert('Please enter valid data');
      return;
    }
    const myId = uuid.v4();
    const userLength = this.userData.length;
    const user = {
      id: myId + 1, name: form.value.name, description: form.value.description, webReference: form.value.webReference
    };
    this.userData.push(user);
    form.reset();
  }

  ngOnInit() {
    this.userData = data.data;
    console.log('data', this.userData);
  }

  openModal() {
    this.showModal = true;
    console.log('this.showModal', this.showModal);
  }

  closeModal() {
    this.showModal = false;
  }

  toggleUserSection(userId) {
    if (!this.selectedUserIds.includes(userId)) {
      this.selectedUserIds.push(userId);
    } else {
      const index = this.selectedUserIds.indexOf(userId);
      if (index > -1) {
        this.selectedUserIds.splice(index, 1);
      }
    }
    console.log('selectedUserIds', this.selectedUserIds);
  }

  deleteUsers() {
    if (!_.isEmpty(this.selectedUserIds)) {
      for (const user of this.selectedUserIds) {
        const index = _.findIndex(this.userData, {id: user});
        if (index > -1) {
          this.userData.splice(index, 1);
        }
      }
      this.selectedUserIds = [];
    }
  }
}
