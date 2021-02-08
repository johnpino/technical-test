import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { PrimaryNavigationComponent } from './shared/primary-navigation/primary-navigation.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { VotingCardComponent } from './shared/voting-card/voting-card.component';
import { HightlightPanelComponent } from './shared/hightlight-panel/hightlight-panel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { OpinionCardComponent } from './shared/opinion-card/opinion-card.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ClosingBarComponent } from './shared/closing-bar/closing-bar.component';
import { Person } from './person/person.model';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PrimaryNavigationComponent,
    NotificationComponent,
    VotingCardComponent,
    HightlightPanelComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    OpinionCardComponent,
    ClosingBarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
