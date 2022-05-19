import { Component, HostListener } from '@angular/core';
import { Car } from './Car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Project';
  // desc = "Hello this is Description";
 /*  constructor(){
    console.log("Hello from AppComponent");
  }
  @HostListener('click', ['$event'])
  
  onhostclick(event:Event){
    alert("The HOst is examine");
  } */
  onbtnclick(){
    var status = prompt("Are you married?");
    alert(status);
  }

  userLoggedIn:boolean = true;
  
  cars:Array<string> = ['audi', 'Nexas', 'texas'];
  Cars:Array<Car> = [
    {nos:1,name:"Audi", color:"black", speed:200},
    {nos:2,name:"BMW", color:"Gradient Red", speed:300},
    {nos:3,name:"Qataar", color:"Red Black", speed:500},
    {nos:4,name:"King Fisher", color:"Black Orange", speed:400},
  ];
  colorFlag:boolean = true;
  getColor(){
    if(this.colorFlag){

      return "red";
    }
    else{
      return "black";
    }
  }
  toHightlight:boolean = true;
  highlightElement(){
    return this.toHightlight;
  }

  attractThis:boolean = true;
  attractElement(){
    return this.attractThis;
  }
  public choose = "";
  setValue(drp:any){
    this.choose = drp.target.value;
  }
}
