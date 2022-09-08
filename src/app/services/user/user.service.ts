import { Injectable } from '@angular/core';
import { mockUsers } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authorizedUser: any = null;

  getUsers() {
    return mockUsers;
  }

  getUser(id: number) {
    return mockUsers.find(user => user.id === id);
  }

  getUserByUsernameAndPassword(username: string, password: string) {  
    return mockUsers.find(user => user.profile.username === username && user.password === password) ?? null;
  }

  getAuthorizedUser() {
    return this.authorizedUser;
  }

  login(username: string, password: string) {
    const user = this.getUserByUsernameAndPassword(username, password);
    if (user?.profile) {
      this.authorizedUser = user.profile;
    }
    return user?.token;
  }
  
  constructor() { }
}