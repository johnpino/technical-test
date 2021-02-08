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
    MainContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
