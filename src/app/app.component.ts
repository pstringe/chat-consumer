import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-consumer';
  user: Observable<any> = new Observable();

  ngOnInit(){
    this.user = this.userService.getAuthorizedUser();
  }

  constructor(private readonly userService: UserService){}

}
