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

    return this.storage.forEach(function (contact: Contact, key: string, i: number) {
      contact.id = key;
      contacts.push(contact);
    })
      .then(() => Promise.resolve(contacts))
      .catch(() => Promise.reject('Erro ao recuperar dados do storage!'));
  }

  set(key, value: Contact, isEdit: boolean = false) {

    if (!isEdit) {
      let id = new Date().getTime();
      key = key + id;
    }

    return this.storage.set(key, value);
  }

  get(key) {
    return this.storage.get(key)
      .then((contact) => {
        contact.id = key;
        return Promise.resolve(contact);
      });
  }

  update(key, value: Contact) {
    return this.set(key, value, true);
  }

  remove(key) {
    return this.storage.remove(key);
  }
}
