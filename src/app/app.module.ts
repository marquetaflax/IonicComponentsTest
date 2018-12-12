import { PopoverPage } from './../pages/popover/popover';
import { ModalPage } from './../pages/modal/modal';
import { ContactPage } from './../pages/contact/contact';
import { ListPage } from './../pages/lists/lists';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestPage } from '../pages/testes/test';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    TestPage,
    LoginPage,
    TabsPage,
    ContactPage,
    ModalPage,
    PopoverPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage,
    ListPage,
    TestPage,
    LoginPage,
    ContactPage,
    TabsPage,
    ModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
