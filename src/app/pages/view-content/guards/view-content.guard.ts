import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieManagerService } from '../../../shared/services/cookie-manager.service';
import { AuthenticateNavigator } from 'src/app/business_domain_services/authenticate/authenticate.service';
import { SearchContentService } from '../../../business_domain_services/search_content/search-content.service';

@Injectable({
  providedIn: 'root'
})
export class ViewContentGuard implements CanLoad {

  constructor(
    private cookieManagerService: CookieManagerService,
    private searchContentService: SearchContentService,
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const existeCookieAccessToken: boolean = this.cookieManagerService.checkExisteCookie(CookieManagerService.ACCESS_TOKEN);

    if (existeCookieAccessToken == true) return true;

    const navigator = this.searchContentService.navigator;
    navigator.goToLandingPage();
    return false;
  }

}
