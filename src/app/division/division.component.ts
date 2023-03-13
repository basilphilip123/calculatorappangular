import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {
  result:number=0
  num1:number=0
  num2:number=0

  divForm=new FormGroup({
    "num1" : new FormControl(),
    "num2": new FormControl()
  
  })
  

performDivision(){
  console.log(this.divForm.value);

}
}