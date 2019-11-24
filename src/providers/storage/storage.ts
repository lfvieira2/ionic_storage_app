import { Contact } from './../../model/contact';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) {
  }

  set(key, value: Contact){
    this.storage.set(key, value);
  }
}
