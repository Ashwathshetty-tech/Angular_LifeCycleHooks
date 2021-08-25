import { Component, OnInit,Input,OnChanges,SimpleChange,SimpleChanges,DoCheck, ChangeDetectionStrategy,ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() myNewNumber?:number;
  @Input() myName:any;
  @Input() myArray:any;
  counter:any=0;
  @Output() valueChanged=new EventEmitter();
  constructor(private cd:ChangeDetectorRef) {
    this.cd.detach();
   }
 
  
  ngOnChanges(changes:SimpleChanges){
    // const newNumberChange:SimpleChange=changes.myNewNumber;
    // console.log("previous value",newNumberChange.previousValue);
    // console.log("current value",newNumberChange.currentValue);
    // console.log("first change",newNumberChange.firstChange);
    // // console.log("is first change",newNumberChange.isFirstChange);
    // console.log("ngOnChanges is called");
    // this.myNewNumber=newNumberChange.currentValue;
    console.log(this.myNewNumber);
    console.log(this.myName);
  }
  ngOnInit(): void {
    console.log("ngOnInit is called");
    console.log(this.myNewNumber);

  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("ngDoCheck is called");
    // this.cd.markForCheck();
    this.cd.reattach();

  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ng After content Init is called");
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("ng After content Checked is called");
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ng After View Init is called");
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ng After View Checked is called");
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ng Destroy is called")
  }
  check(){
    this.counter+=1;
    this.valueChanged.emit(this.counter);
  }
}
