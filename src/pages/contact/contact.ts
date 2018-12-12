import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) 
  {
    /* quando parametros são passados de outra página, elas devem ser recebidas pelo construtor
      da classe em que se encontra o redirecionamento (necessidade do navParams)*/
    let username = this.navParams.get("username");
    let password = this.navParams.get("password");

    console.log(username + "  " + password);
  }

  goBack() {
    // para voltar à pagina anterior, deve-se retirar a atual do topo da "pilha" (pop)
    // mantem os dados preenchidos da página anterior
    this.navCtrl.pop();

  }

  reset() {
    // utilizando o setRoot, ao redirecionar para a página desejada, não aparecerá o botão de retorno
    // limpa os valores da página anterior
    this.navCtrl.setRoot(LoginPage);
  }
}
