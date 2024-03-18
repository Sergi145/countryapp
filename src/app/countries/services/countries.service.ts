import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Country} from "../interfaces/country";

@Injectable({providedIn:'root'})
export class CountryService {

  private apiURL:string = 'https://restcountries.com/v3.1';
  constructor(private http:HttpClient) {
  }

  searchCapital(term:string ):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/capital/${term}`).pipe(
      catchError (error => {
        console.log(error);
          return of([])
      })
    );
  }

  searchCountry(term:string ):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/name/${term}`).pipe(
      catchError (error => {
        console.log(error);
        return of([])
      })
    );
  }

  searchRegion(region:string ):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/region/${region}`).pipe(
      catchError (error => {
        console.log(error);
        return of([])
      })
    );
  }

  searchCountryByAlphaCode (code:string):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiURL}/alpha/${code}`).pipe(
      catchError (error => {
        console.log(error);
        return of([])
      })
    );
  }
}
