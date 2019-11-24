import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { Contact } from '../../model/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts: Contact[] = [];

  constructor(
    public navCtrl: NavController, 
    private storageProvider: StorageProvider
  ) {
    this.storageProvider.getAll()
    .then((contacts) => this.contacts = contacts)
    .catch((err) => alert(err));
  }

}
