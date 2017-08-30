import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { GasStation } from '../GasStation';
import { GasStationService } from '../GasStationService';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.css' ]
})

export class DetailComponent implements OnInit {
  gasStation: GasStation;

  constructor(private gasStationService: GasStationService) {}

  ngOnInit(): void {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.gasStationService.getGasStationObserver().subscribe(data => {
      this.gasStation = data;
      console.log(data);
    });
  }
}
