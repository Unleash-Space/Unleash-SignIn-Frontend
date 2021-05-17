import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

class reason {
  public option: string;
  public index: number;
  public subReason?: reason[];

  constructor() {}
}
class user {
  public name: string;
  public upi: string;
  public id: string;

  constructor() {}
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL: string = '';
  headers: string;

  constructor(public http: HttpClient) {}

  //get login options for reasons to log in
  async loginOptions(): Promise<reason[]> {
    try {
      var res: any = await this.http
        .get(`${this.BASE_URL}/options`)
        .toPromise();
      return await res.options;
    } catch (err) {
      return [];
    }
  }

  //get a list of the currently logged in users
  async currentUsers(): Promise<user[]> {
    try {
      var res: any = await this.http.get(`${this.BASE_URL}/users`).toPromise();
      return await res.users;
    } catch (err) {
      return [];
    }
  }

  //post log in a new user
  async logIn(json: any) {
    try {
      var res = await this.http
        .post(`${this.BASE_URL}/logIn`, json)
        .toPromise();
      return true;
    } catch (err) {
      return false;
    }
  }

  //post log out a current user
  async logOut(upi: string): Promise<boolean> {
    //{ headers: this.headers, withCredentials: withCredentials }
    try {
      var res = await this.http
        .post(`${this.BASE_URL}/logOut`, { upi: upi })
        .toPromise();
      return true;
    } catch (err) {
      return false;
    }
  }
}
