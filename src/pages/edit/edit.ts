import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { Contact } from '../../model/contact';

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
  contact: Contact = { email: '', name: '', phone: null };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private StorageProvider: StorageProvider
  ) {
    this.StorageProvider.get(this.navParams.get('id'))
      .then((contact) => this.contact = contact);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

}
