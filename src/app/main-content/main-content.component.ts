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
  }

  onClickThumb(event) {
    let person;
    switch(event.selectedRadioVote) {
      case 'up':
        person = this.storeService.data.find( person => person.id === event.id ).voteUp();
        break;
      case 'down':
        person = this.storeService.data.find( person => person.id === event.id ).voteDown();
        break;
    }

    //console.log(event);
  }

}
