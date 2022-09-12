import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mockUsers } from './mock-users';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private authorizedUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private readonly auth: AngularFireAuth) {}

  getUsers() {
    return mockUsers;
  }

  getUser(id: number) {
    return mockUsers.find(user => user.id === id);
  }

  getUserByUsernameAndPassword(username: string | null | undefined, password: string | null | undefined) {  
    return mockUsers.find(user => user.profile.username === username && user.password === password) ?? null;
  }

  getAuthorizedUser(): Observable<any> {
    return this.authorizedUser;
  }

  login(username: string | null | undefined, password: string | null | undefined) {
    const user = this.getUserByUsernameAndPassword(username, password);
    if (user?.profile) {
      this.authorizedUser.next(user.profile);
    }
    //authenticate with firebase custom auth
    this.auth.signInWithCustomToken(user?.token ?? '');
    return user?.token;
  }

  logout(){
    this.authorizedUser.next(null);
  }
  
}
