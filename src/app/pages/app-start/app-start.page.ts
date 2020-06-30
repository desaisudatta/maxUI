import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router"
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-app-start',
  templateUrl: './app-start.page.html',
  styleUrls: ['./app-start.page.scss'],
})
export class AppStartPage implements OnInit {

  constructor( private route:Router,private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
  }
  goToDashboard(){
    let id="65"
    this.route.navigate(["dashboard-with-id",id])
    
    console.log("Hey this is dashboard")
  }

}
