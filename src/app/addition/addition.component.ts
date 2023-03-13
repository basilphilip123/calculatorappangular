import { Component } from '@angular/core';
import { FormGroup,FormControl ,Validators} from '@angular/forms';
import { CalcService } from '../services/calc.service';
@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  result:number=0

  // num1:number=0
  // num2:number=0
  
addForm=new FormGroup({
  "num1" : new FormControl("",Validators.required),
  "num2": new FormControl("",Validators.required)
  
})

get num1()
{
  return this.addForm.get("num1")
}
get num2()
{
  return this.addForm.get("num2")
}

constructor(private service:CalcService){}
ngOnInit(): void{

}

performAddition(){
  let data=this.addForm.value
 this.service.addition(data).then(res=>res.json()).then(data=>this.result=data.Result)
} 

}
