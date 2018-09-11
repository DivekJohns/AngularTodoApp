import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from './interface';

@Injectable({
  providedIn: 'root'
})
export class AddserviceService {
  items: Observable<Item[]>;
  loadingmessage = 'loading..';
  itemCollection: AngularFirestoreCollection<Item>;
  itemDocument: AngularFirestoreDocument<Item>;

  constructor(public db: AngularFirestore) {
    this.itemCollection = this.db.collection('family');

    this.items = this.db.collection('family').valueChanges();
   }

// get all items from firebase 

getItems() {
  return this.items;
}


  saveTodo(inputdata, Category, Prority) {
    if (inputdata === "") {
      alert('Please Add a text');

    }
    else if (Category == 'Select Category' || Prority == 'Select Prority') {
      alert('Please select Category and Prority');
    }
    else {
      const documentId = this.db.createId();
      this.itemCollection.doc(documentId).set({ taskname: inputdata, category: Category, prority: Prority, id: documentId, status: '', checked : "" ,disabled: "", hide:"DontHide"});
    }


  }


  firebaseDeleteCourse(delCourse: Item) {


    this.itemDocument = this.db.doc(`family/${delCourse.id}`);
    this.itemDocument.delete();

  }
  //update 
  newdata(inputdata , Category , Prority , id) {
    this.itemDocument = this.db.doc(`family/${id}`);
    this.itemDocument.update({ taskname: inputdata, category: Category, prority: Prority });
 

  }
  

   complete(id) {
    this.itemDocument = this.db.doc(`family/${id}`);
    this.itemDocument.update({ status: "w3-green" , checked :"checked",disabled:"disabled" ,hide:""});
 

  }


}


