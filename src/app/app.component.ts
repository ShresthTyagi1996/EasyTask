import { Component } from '@angular/core';

import { HeaderComponent } from "./Development-using-udemy/header.component";
import { UserComponent } from './Development-using-udemy/user/user.component';
import { DUMMY_USERS } from './Development-using-udemy/dummy-users';
import { TasksComponent } from "./Development-using-udemy/tasks/tasks.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  users = DUMMY_USERS;
  selectedUserId?: string;


  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
