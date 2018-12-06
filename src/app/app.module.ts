import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChessDatabaseGameComponent } from '../components/chess-database-game/chess-database-game';
import { ChessDatabaseNewComponent } from '../components/chess-database-new/chess-database-new';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

var config = {
  apiKey: "AIzaSyBljQAnmKh_jsvfddi8pECxNWafNSbMZSU",
  authDomain: "studionicapp.firebaseapp.com",
  databaseURL: "https://studionicapp.firebaseio.com",
  projectId: "studionicapp",
  storageBucket: "studionicapp.appspot.com",
  messagingSenderId: "1029970822461"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChessDatabaseGameComponent,
    ChessDatabaseNewComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChessDatabaseNewComponent,
    ChessDatabaseGameComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
