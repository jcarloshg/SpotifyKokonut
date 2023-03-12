import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  static ACCESS_TOKEN: String = 'ACCESS_TOKEN';
  static REFRESH_TOKEN: String = 'REFRESH_TOKEN';

  constructor(private cookieService: CookieService) { }

  public checkExisteCookie(key: String) {
    const name = key as string;
    return this.cookieService.check(name);
  }

  public getValue(key: String): String {
    const value = this.cookieService.get(key as string);
    return value as String;
  }

  public setValue(key: String, valueString: String) {
    const name = key as string;
    const value = valueString as string;
    this.cookieService.set(name, value);
  }

}
