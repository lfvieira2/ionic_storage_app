import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Contact } from '../../model/contact';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) {
  }

  getAll(): Promise<Contact[]> {
    let contacts: Contact[] = [];

    return this.storage.forEach(function(contact: Contact, key: string, i: number){
      contacts.push(contact);
    })
    .then(()  => Promise.resolve(contacts))
    .catch(() => Promise.reject('Erro ao recuperar dados do storage!'));
  }

  set(key, value: Contact) {
    this.storage.set(key, value);
  }

  get(key) {
    return this.storage.get(key);
  }

  update(key, value: Contact) {
    this.set(key, value);
  }
}
