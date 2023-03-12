import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SearchContentApplication } from 'src/business_domain/search_content/application/application.searchContent';
import { SearchItemsHttpClient } from 'src/business_domain/search_content/infrastructure/httpClient/httpClient.searchItems';

@Injectable({
  providedIn: 'root'
})
export class SearchContentService {

  private _domain: SearchContentApplication;
  private _navigator: SearchContentNavigation;


  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {

    this._navigator = new SearchContentNavigation(this.router);

    this._domain = new SearchContentApplication({
      searchItemsRepository: new SearchItemsHttpClient(this.httpClient),
    });
  }

  get domain(): SearchContentApplication {
    return this._domain;
  }

  get navigator(): SearchContentNavigation {
    return this._navigator;
  }

}


export class SearchContentNavigation {

  constructor(private router: Router) { }

  public goToLandingPage() {
    this.router.navigate(['./ingresar/landing_page']);
  }

}