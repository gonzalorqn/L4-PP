import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private key = "favorites";

  public listado: Array<any> = [];

  constructor() { }

  public addFav(code: string): number
  {
    try
    {
      let favs = localStorage.getItem(this.key);

      if(!favs)
      {
        this.listado.push(code);
        localStorage.setItem(this.key, JSON.stringify(this.listado));
        return 0; //item creado
      }
      
      try
      {
        let listaFavs = JSON.parse(favs);
        this.listado = listaFavs;
        this.listado.forEach(fav => {
          if(fav === code)
          {
            throw "asd";
          }
        });
        this.listado.push(code);
        localStorage.setItem(this.key, JSON.stringify(this.listado));
        return 0; //item actualizado
      }
      catch(error)
      {
        const index: number = this.listado.indexOf(code);

        if (index !== -1)
        {
          this.listado.splice(index, 1);
          localStorage.setItem(this.key, JSON.stringify(this.listado));
          return 1; //fav eliminado
        }
      }
    }
    catch(error)
    {
      return -1; //hubo un error
    }
  }
}
