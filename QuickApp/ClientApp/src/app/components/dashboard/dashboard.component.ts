import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeInOut]
})
export class DashboardComponent implements OnInit {

  constructor(public configurations: ConfigurationService) {
  }

  ngOnInit(): void {
  }

}
