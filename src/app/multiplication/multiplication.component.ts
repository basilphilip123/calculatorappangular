import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {

  
    // result:number=0
    result:number=0
    num1:number=0
    num2:number=0
  
    mulForm=new FormGroup({
      "num1" : new FormControl(),
      "num2": new FormControl()
    
    })

  performMultiplication(){
    
    console.log(this.mulForm.value);
    
  
    }
}