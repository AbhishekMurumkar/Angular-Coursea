import { Injectable } from '@angular/core';
import { Promotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/Promotions";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
    getPromotions():Promotion[] {
    return PROMOTIONS;
  }
  getPromotion(id:string):Promotion{
  	return PROMOTIONS.filter(p=>p.id===id)[0]; //return searched id Promotion
  }
  getFeaturedPromotion():Promotion{
  	return PROMOTIONS.filter(p=>p.featured)[0]; //return featured (first) Promotion
  }
}
