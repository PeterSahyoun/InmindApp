import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Country } from 'src/app/types/api';



const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private source: Country[];
  searchFilter?: string;
  regionFilter?: string;
  regionOptions: string[] = REGION_OPTIONS;


  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllCountries().subscribe((countries) => {
      this.source = countries;
      console.log(countries);
    })
  }

  get countries() {
    
    return this.source
    ? this.source
        .filter((country) =>
          this.searchFilter
            ? JSON.stringify(country.name).includes(this.searchFilter)
            : country
        )
        .filter((country) =>
          this.regionFilter
            ? country.region.includes(this.regionFilter)
            : country
        )
    : this.source;
  }
}