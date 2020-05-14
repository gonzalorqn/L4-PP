import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {

  listado: Array<any>;

  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  displayModal: boolean = false;
  message: string = "";
  header: string = "";

  constructor(private http: HttpService, private router: Router, private favorites: FavoritesService) { }

  ngOnInit(): void {
    this.http.get('asia').subscribe((data: Array<any>) => {
      this.listado = data;
    }, error => {
      alert(error.message);
    });

    this.sortOptions = [
      {label: 'Name A-Z', value: 'name'},
      {label: 'Name Z-A', value: '!name'},
      {label: 'Code A-Z', value: 'alpha2Code'},
      {label: 'Code Z-A', value: '!alpha2Code'}
    ]
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) 
    {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else 
    {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  
  selectPais(event: Event, code: string)
  {
    this.router.navigateByUrl('/country/' + code);
  }

  public saveFavorite(code: string)
  {
    const ret: number = this.favorites.addFav(code);
    if(ret === -1) //error
    {
      this.header = "Error";
      this.message = "There was an error while adding favorite.";
      this.displayModal = true;
    }
    else if(ret === 0) //agregado
    {
      this.header = "Success";
      this.message = "Your favorite has been added.";
      this.displayModal = true;
    }
    else if(ret === 1) //eliminado
    {
      this.header = "Success";
      this.message = "Your favorite has been deleted.";
      this.displayModal = true;
    }
  }
}
