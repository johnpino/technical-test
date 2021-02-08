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

  @Input() id: number;
  @Input() image: string;
  @Input() name: string;
  @Input() date: string;
  @Input() section: string;
  @Input() description: string;
  @Input() percents: {up: string, down: string};
  winningColor: string;
  winningIcon;
  selectedRadioVote: string;

  @Output() clickThumb: any = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.winningColor = this.percents.up > this.percents.down ? 'winning-up' : 'winning-down';
    this.winningIcon = this.percents.up > this.percents.down ? faThumbsUp : faThumbsDown;
  }

  onClickRadio(e) {
    this.selectedRadioVote = e.target.value;
  }

  onClickVote() {
    this.clickThumb.emit({id: this.id, selectedRadioVote: this.selectedRadioVote});
  }

}
