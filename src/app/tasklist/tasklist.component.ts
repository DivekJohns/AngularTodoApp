import { Component, OnInit } from '@angular/core';
import { Item } from '../interface';
import { AddserviceService } from '../addservice.service';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  editSignal = "none";
  Category = "Category";
  Prority = "Select Prority";
  editdata = "test";
  id = "error"
  items;
  display = 'block ';
  emptyflag = 'none';
  loadingmessage = 'loading..';
   searchText;
showChecked=0;

hideCompelted(){
(this.showChecked==1)?	this.showChecked=0 :	this.showChecked=1;

}

  filterMe(passedCategory){
    this.searchText = passedCategory;
  }
  changeCategory(passedCategory) {
    this.Category = passedCategory;
  }

  changePrority(passedPrority) {
    this.Prority = passedPrority;
  }

  firebaseDeleteCourse(delCourse: Item) {

    // console.log('Delete Pressed');
    // this.itemDocument = this.db.doc(`family/${delCourse.id}`);
    // this.itemDocument.delete();
this.db.firebaseDeleteCourse(delCourse);
  }

    firebaseUpdateCourse(updateCourse: Item) {
      this.Category = updateCourse.category;
      this.Prority = updateCourse.prority;
      this.editdata = updateCourse.taskname;
      this.id = updateCourse.id;
      this.editSignal = 'block';
     // console.log(this.editSignal);
    //  console.log('update Pressed');
    }

  newdata(inputdata) {
    this.editSignal = 'none';
    this.db.newdata(inputdata, this.Category, this.Prority,this.id);
  }

  hideeditpanel() {
    this.editSignal = 'none';
  }


  constructor(public db: AddserviceService) {

    // this.items = this.db.collection('family').valueChanges();
    // this.items.subscribe(items => {
    //   this.display = 'none';
    //   console.log(items);
    //   if (items.length === 0) {
    //     this.loadingmessage = 'No Tasks Just Sit Back And Relax';
    //   } else {
    //     this.loadingmessage = 'The End..';
    //   }

    // });

    this.db.getItems().subscribe(items => {
      this.display = 'none';
      this.items = items ;
     //  console.log("from component");
    //  console.log(items);
      if (items.length == 0) {
        this.loadingmessage = 'No Tasks Just Sit Back And Relax';
      } else {
        this.loadingmessage = this.items.length+' Tasks totally ';
      }

    });
  }
  taskCompleted(event,id ,checked) {
    if(checked==true){
      alert("Nice Try Task is Completed Already");
    }
    else{
      this.db.complete(id);
    event.target.parentElement.parentElement.classList.toggle('w3-green');
    }
    
  }

}
