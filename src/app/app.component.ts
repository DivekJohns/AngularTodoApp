import { Component } from '@angular/core';
import { AddserviceService } from './addservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
    Category="Select Category";
    Prority="Select Prority";


  constructor(public db: AddserviceService) {
 // this.itemCollection=this.db.collection('family');

   }

  saveTodo(inputData){
    this.db.saveTodo(inputData ,this.Category,this.Prority );
}

changeCategory(passedCategory){
  this.Category=passedCategory;
}

  changePrority(passedPrority){
  this.Prority=passedPrority;
}
  }

