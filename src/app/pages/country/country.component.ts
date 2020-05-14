import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  pais: any;
  array: string[];

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    let url = this.router.url;
    let array = url.split('/', 3);

    this.http.getByCode(array[2]).subscribe((data: any) => {
      this.pais = data;
    }, error => {
      alert(error.message);
    });
  }

}
