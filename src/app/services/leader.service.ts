import { Injectable } from '@angular/core';
import { LEADERS } from "../shared/Leaders";
import { Leader } from "../shared/Leader";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
  		return LEADERS;
  }
  getFeaturedLeader():Leader{
  	return LEADERS.filter(l=> l.featured)[0];
  }
}
