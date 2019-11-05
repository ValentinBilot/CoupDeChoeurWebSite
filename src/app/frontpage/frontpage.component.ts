import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  text:string = "La musique c'est trop génial !" ;
  text_array:string[] = [];

  constructor() { }

  ngOnInit() {
    for (let i of this.text){
      this.text_array.push(i);
    }

  }





}
