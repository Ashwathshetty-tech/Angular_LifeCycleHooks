import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number:number=12345;
  name:string="ashwath";
  arr:any=[];
  count=0;
  output:any;
  user:any={
    name:"ashwath"
  };
  updateValue(){
    this.user.name="ali";;
  }
  addValue(){
    this.arr.push(this.count);
    this.count=this.count+1;
  }
  increment(){
    this.number++;
  }
  decrement(){
    this.number--;
  }
  displayCounter(data:any){
    console.log(data);
   this.output=data;
  }
}
