import { Component } from '@angular/core';
import {Country} from "../../interfaces/country";
import {CountryService} from "../../services/countries.service";

@Component({
  selector: 'region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries:Country[] = [];

  constructor(private countriesService: CountryService) {
  }

  searchByRegion (region:string):void {
    this.countriesService.searchRegion(region).subscribe(countries => {
      this.countries = countries;
    });
  }
}
