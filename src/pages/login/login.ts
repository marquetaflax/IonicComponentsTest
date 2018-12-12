import { PopoverPage } from './../popover/popover';
import { ModalPage } from './../modal/modal';
import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController, ActionSheetController, ModalController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {

  // varáveis que serão linkadas com os campos do html
  username: string = "";
  password: string = "";
  userType: any;
  rememberPassword: boolean;

  constructor(
    public navCtrl: NavController, 
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    public popoverController: PopoverController,
    ) { }

  login() {
    console.log(this.username);
    console.log(this.password);
    console.log(this.userType);
    console.log(this.rememberPassword);

    let loading = this.loadingController.create({
      content: "Loading...",
      spinner: "dots"
    });
    loading.present();

    setTimeout (() => {
      loading.dismiss();
    }, 3000);
  }

  cancel() {
    this.username="";
    this.password="";
  }

  alert() {
    let alert = this.alertController.create({
      title: "Caution!",
      message: "The corno is puto kkjk",
      inputs: [{
        name: "email",
        placeholder: "Duas formas de criar alertas"
      }],
      buttons: [{
        text: "OK",
        // handler será utilizado para coletar os valores que foram inseridos durante o alerta
        handler: (data) => {
          console.log(data);
        }
      }]
    });

    // let alert = this.alertController.create();
    // alert.setTitle("Congratiolations");
    // alert.addInput ({
    //   type: 'checkbox',
    //   label: 'Formas distintas',
    //   value: 'send'
    // });

    // alert.addInput ({
    //   type: 'checkbox',
    //   label: 'De coletar valores',
    //   value: 'dontSend'
    // });

    // alert.addButton({
    //   text: 'OK',
    //   handler: (data) => {
    //     console.log(data)
    //   }
    // });

    alert.present();
  }

  toast () {
    let toast = this.toastController.create ({
      message: "This is a toast",
      duration: 5000,
      showCloseButton: true,
      position: "top"
    })

    toast.present();
  }

  actionSheet() {
    let action = this.actionSheetController.create({
      title: "Select an option",
      buttons: [{
        icon:"logo-facebook",
        text: "Share with Facebook",
        handler: () => {
          console.log("Shared via Facebook");
        }
      }, {
        icon:"mail",
        text: "Share with Mail",
        handler: () => {
          console.log("Shared via Mail");
        }
      }, {
        icon:"close",
        role:"cancel",
        text: "Cancel",
        handler: () => {
          console.log("Cancelled");
        }
      }],
    });

    action.present();
  }

  goToContact() {
    // ele pega a página a ser redirecionada e joga "acima" da anterior (push)
    // ele cria o botão de retornar para a página atual
    this.navCtrl.push(
      ContactPage,
      /*a passagem de valores entre páginas se dá por um Json 
        (exemplo abaixo passando username e password)*/
      {
        "username": this.username,
        "password": this.password
      });
  }

  openModal() {
    //a passagem de parametros por modal funciona igual ao redirecionamento
    let modal = this.modalController.create(
      ModalPage, 
      {
        "username": this.username
      });

    modal.onDidDismiss((data) => {
      console.log(data);
    });
    modal.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverController.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}