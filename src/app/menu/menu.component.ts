import { Component, OnInit } from '@angular/core';
import {Dish} from "../shared/dish";
// this is imported directly
// import {DISHES} from "../shared/dishes";

// importing above with dependency injection
import { DishService } from "../services/dish.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes:Dish[];
  selectedDish:Dish;
  
  constructor(private dishService: DishService) {}
  
  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
    this.selectedDish = this.dishes[0];
  }
  
  onSelect(newDish:Dish){
    console.log(newDish);
    this.selectedDish=newDish;
  }
}
