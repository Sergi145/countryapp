import { Component } from '@angular/core';
import {Country} from "../../interfaces/country";
import {CountryService} from "../../services/countries.service";

@Component({
  selector: 'country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries:Country[] = [];

  constructor(private countriesService: CountryService) {
  }

  searchByCountry (term:string):void {
    this.countriesService.searchCountry(term).subscribe(countries => {
      this.countries = countries;
    });
  }
}
