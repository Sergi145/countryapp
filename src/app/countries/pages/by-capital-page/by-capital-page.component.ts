import { Component } from '@angular/core';
import {CountryService} from "../../services/countries.service";
import {Country} from "../../interfaces/country";

@Component({
  selector: 'capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries:Country[] = [];

  constructor(private countriesService: CountryService) {
  }


  searchByCaptial (term:string):void {
    this.countriesService.searchCapital(term).subscribe(countries => {
        this.countries = countries;
    });
  }

}
