import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  user: string;
  label: string;
  icon: string;
  class: string;
  routerLink: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "/",},
      {label: 'Africa', icon: 'pi pi-fw pi-globe', routerLink: "/africa"},
      {label: 'Americas', icon: 'pi pi-fw pi-globe', routerLink: "/americas"},
      {label: 'Asia', icon: 'pi pi-fw pi-globe', routerLink: "/asia"},
      {label: 'Europe', icon: 'pi pi-fw pi-globe', routerLink: "/europe"},
      {label: 'Oceania', icon: 'pi pi-fw pi-globe', routerLink: "/oceania"},
      {label: 'Favorites', icon: 'pi pi-fw pi-star', routerLink: "/favorites"}
    ];
    try {
      const token = localStorage.getItem('token');
      const payload = jwt_decode(token);
      this.label = "Logout";
      this.icon = "pi pi-power-off";
      this.class = "ui-menuitem ui-button-danger";
      this.user = payload.name;
      this.routerLink = "/"
    }
    catch (error) {
      this.user = "not logged in";
      this.label = "Login";
      this.icon = "pi pi-sign-in";
      this.class = "ui-menuitem ui-button-success";
      this.routerLink = "/login";
    }
  }
  
  public log()
  {
    if(this.label === "Logout")
    {
      localStorage.setItem('token', null);
      localStorage.removeItem('favorites');
      this.user = "not logged in";
      this.label = "Login";
      this.icon = "pi pi-sign-in";
      this.class = "ui-menuitem ui-button-success";
      this.routerLink = "/login";
    }
  }
}
