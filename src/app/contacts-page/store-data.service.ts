import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  constructor(public angularFire: AngularFirestore) { }

  createNewInquiry(inquiry: any) {
    return this.angularFire.collection('Inquiries').add(inquiry);
  }
}
