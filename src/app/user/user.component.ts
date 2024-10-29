import { Component,computed,EventEmitter,Input,input,output,Output,signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy/dummy-users.service';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


// const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

// type User={
//   id:string,
//     avatar:string,
//     name:string
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!:User
  @Input({required:true}) isSelected!:boolean

  // @Input({required:true}) avatar!:string;
  // @Input() name!:string;
  // @Output() selected= new EventEmitter();
  selected =output<string>();
  // onSelectUser(){
  //   const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  get imagePath(){
    return 'assets/users/'+this.user.avatar
  }

  onSelectUser(){
    this.selected.emit(this.user.id);
  }
}
