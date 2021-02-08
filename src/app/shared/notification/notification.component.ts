import { Component, OnInit } from '@angular/core';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
