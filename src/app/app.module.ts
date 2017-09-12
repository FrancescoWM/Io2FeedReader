import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StoriesPage } from '../pages/stories/stories';
import { StoryPage } from '../pages/story/story';
import { FeedProvider } from '../providers/feed/feed'; 

import { HttpModule } from '@angular/http'; // Si deve aggiungere questo per far funzionare il provider feed

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StoriesPage,
    StoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StoriesPage,
    StoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedProvider
  ]
})
export class AppModule {}
