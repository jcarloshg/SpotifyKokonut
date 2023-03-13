import { Injectable } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from "ngx-online-status";
import { AuthenticateService } from 'src/app/business_domain_services/authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class ListenNetworkStatusService {

  constructor(
    private onlineStatusService: OnlineStatusService,
    private authenticateService: AuthenticateService,
  ) {

    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      // use status
      if (status == 0) this.authenticateService.navigator.goToLandingPage();
    });

  }

}
