import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewController: ViewController,
    ) { 
      console.log(this.navParams.get("username"));
     }

  close() {
    // view controller é a página que chama o modal
    /* para a passagem de parametros do modal para a pagina que o chamou, deve-se criar um handler
      na página que evocou o modal*/
    this.viewController.dismiss({"status": "done"});
  }
}
