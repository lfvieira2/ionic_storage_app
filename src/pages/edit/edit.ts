import { ToastProvider } from './../../providers/toast/toast';
import { Contact } from './../../model/contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from './../../providers/storage/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  contact: Contact = { 'email': '', 'name': '', 'phone': null };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storageProvider: StorageProvider,
    private toastProvider: ToastProvider) {
    this.storageProvider.get(this.navParams.get('id'))
      .then((contact) => this.contact = contact);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  updateContact(key) {
    this.storageProvider.update(key, this.contact)
      .then(() => {
        this.toastProvider.createToast('Contato atualizado com sucesso');
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        this.toastProvider.createToast(error);
      });
  }

  removeContact(key) {
    this.storageProvider.remove(key)
      .then(() => {
        this.toastProvider.createToast('Contato removido com sucesso');
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        this.toastProvider.createToast(error);
      });
  }
}