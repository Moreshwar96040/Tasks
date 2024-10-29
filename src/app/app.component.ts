import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy/dummy-users.service';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, UserComponent, HeaderComponent,TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app-udemy';
  users=DUMMY_USERS;
  selectedUser:string="";

  get getUser(){
    return this.users.find((user)=>user.id==this.selectedUser)!;
  }

  onSelect(id : string){
      this.selectedUser=id;
  }
}
