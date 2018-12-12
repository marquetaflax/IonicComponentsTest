import { ContactPage } from './../contact/contact';
import { ListPage } from './../lists/lists';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { TestPage } from '../testes/test';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = TestPage;
  tab3Root = ListPage;
  tab4Root = ContactPage

  constructor() {

  }
}
