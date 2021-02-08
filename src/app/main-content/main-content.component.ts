import { Component, OnInit } from '@angular/core';
import { StoreService } from "../services/store.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  data: {};

  constructor(private storeService: StoreService) {
    this.data = storeService.data;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  onClickThumb(e) {
    console.log(e);
  }

}
