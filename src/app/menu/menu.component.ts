import { Component, OnInit } from '@angular/core';
import {DISHES} from "../shared/dishes";
import {Dish} from "../shared/Dish";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes=DISHES;
  selectedDish:Dish=this.dishes[0];
  
  constructor() { }
  ngOnInit(): void {
  }
  onSelect(newDish:Dish){
    console.log(newDish);
    this.selectedDish=newDish;
  }
}
