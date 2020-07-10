import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router"
import { Route } from '@angular/compiler/src/core';
import { LanguageService } from "../../services/language/language.service";
import {FormGroup,FormControl,Validators,FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-app-start',
  templateUrl: './app-start.page.html',
  styleUrls: ['./app-start.page.scss'],
})
export class AppStartPage implements OnInit {
  form = new FormGroup({
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
    ])
   });
  slideOpts = {
    initialSlide: 1,
    pagination: false,
    speed: 400
  };
  slideImages=[
    "../../../assets/img/Group 45.svg",
    "../../../assets/img/img 1.svg",
    "../../../assets/img/img2 2.svg"
  ]
  constructor(private route:Router,private language:LanguageService,private activatedRoute:ActivatedRoute ) { 
  }
  onSubmit(){
    alert(JSON.stringify(this.form.value));
  }
  ngOnInit() {
    this.language.setInitalAppLanguage()
  }
  goToDashboard(){
    let id="65"
    this.route.navigate(["dashboard-with-id",id])
    
    console.log("Hey this is dashboard")
  }

}
