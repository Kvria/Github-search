import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
 
 
  newSearch:string
  @Output() addNewSearch:EventEmitter<string> = new EventEmitter<string>()
  submitForm(){
    console.log("kuria")
    this.addNewSearch.emit(this.newSearch)
    this.newSearch = ("")
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
