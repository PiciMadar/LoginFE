import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { NavItem } from '../../interfaces/navitem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    this.setupMenu()
  }
  navItems: NavItem[] =[]


  setupMenu(){
      this.navItems=[

        {name:"Home", url: "/main", icon: 'bi bi-houses-fill'},
        {name:"Login", url: "/login", icon: 'bi bi-box-arrow-in-right'},
        {name:"Registration", url: "/registration", icon: 'bi-person-plus-fill'},
        
      ]
  }
}
