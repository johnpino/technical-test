import { Component, OnInit } from '@angular/core';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-opinion-card',
  templateUrl: './opinion-card.component.html',
  styleUrls: ['./opinion-card.component.scss']
})
export class OpinionCardComponent implements OnInit {

  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;
  faWikipediaW = faWikipediaW;

  constructor() { }

  ngOnInit(): void {
  }

}
