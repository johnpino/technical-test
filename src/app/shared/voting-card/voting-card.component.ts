import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.scss']
})
export class VotingCardComponent implements OnInit {

  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;

  @Input() image: string;
  @Input() name: string;
  @Input() date: string;
  @Input() section: string;
  @Input() description: string;

  @Output() clickThumb: any = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickThumb() {
    this.clickThumb.emit("click");
  }

}
