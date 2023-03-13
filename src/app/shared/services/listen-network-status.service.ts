import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineStatusService, OnlineStatusType } from "ngx-online-status";

@Injectable({
  providedIn: 'root'
})
export class ListenNetworkStatusService {

  static OFFLINE: number = 0;
  static ONLINE: number = 1;

  constructor(
    private onlineStatusService: OnlineStatusService,
    private router: Router,
  ) {

    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      if (status == ListenNetworkStatusService.OFFLINE) {
        this.router.navigate(['./publico/conexion-fallida']);
      }
      if (status == ListenNetworkStatusService.ONLINE) {
        this.router.navigate(['./contenido']);
      }
    });

  }

}
