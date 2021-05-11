import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
class reason {
  public option: string;
  public optionIndex: number;
  public subReason?: reason[];

  constructor() {}
}
class user {
  public name: string;
  public upi: string;
  public id: string;

  constructor() {}
}
export class ApiService {
  BASE_URL: string = '';
  headers: string;

  constructor(public http: HttpClient) {}

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

  async currentUsers(): Promise<user[]> {
    try {
      var res: any = await this.http.get(`${this.BASE_URL}/users`).toPromise();
      return await res.users;
    } catch (err) {
      return [];
    }
  }

  async logIn(upi: string, reason: reason) {
    try {
      var res = await this.http
        .post(`${this.BASE_URL}/logIn`, { upi: upi, reasonIndex: reason })
        .toPromise();
      return true;
    } catch (err) {
      return false;
    }
  }

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
