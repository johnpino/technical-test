import { Component, OnInit } from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-primary-navigation',
  templateUrl: './primary-navigation.component.html',
  styleUrls: ['./primary-navigation.component.scss']
})
export class PrimaryNavigationComponent implements OnInit {

  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
