import { Component } from '@angular/core';
import { ListenNetworkStatusService } from 'src/app/shared/services/listen-network-status.service';

@Component({
  selector: 'app-connection-failed',
  templateUrl: './connection-failed.component.html',
  styleUrls: ['./connection-failed.component.css']
})
export class ConnectionFailedComponent {
  constructor(private listenNetworkStatusService: ListenNetworkStatusService) { }
}
