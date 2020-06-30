import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { LanguageService } from "../../services/language/language.service";

@Component({
  selector: 'app-dashboard-with-id',
  templateUrl: './dashboard-with-id.page.html',
  styleUrls: ['./dashboard-with-id.page.scss'],
})
export class DashboardWithIdPage implements OnInit {

  constructor(private route:ActivatedRoute,private language:LanguageService) {

   }

  ngOnInit() {
    this.language.setInitalAppLanguage()
    console.log(this.route.snapshot.paramMap.get('id'))
  }

}
