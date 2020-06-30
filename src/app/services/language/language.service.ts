import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Storage } from "@ionic/storage";

const LNG_KEY="SELECTED_LANGUAGE";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected="";

  constructor(private translate:TranslateService, private storage:Storage) { }

  setInitalAppLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then((val)=>{
      if(val){
        this.setLanguage(val);
        this.selected=val
      }
    });
  }

  getLanguages(){
    return[
    {text:"English",value:'en',img:""},
    {text:"Hindi",value:'hn',img:""},
    ]
  }

  setLanguage(lng){
    this.translate.use('en');
    this.selected=lng;
    this.storage.set(LNG_KEY,lng);
  }
}
