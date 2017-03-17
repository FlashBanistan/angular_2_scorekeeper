import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent {
  
  games: any[] = [
    {
      title: "Books and Run",
      start_game_url: "/books_and_run/create",
      view_stats_url: "#",
      img_url: "../assets/images/books_and_run.jpg",
    },
    {
      title: "Oh Crap",
      start_game_url: "#",
      view_stats_url: "#",
      img_url: "../assets/images/oh_crap.jpg",
    },
    {
      title: "Scum",
      start_game_url: "#",
      view_stats_url: "#",
      img_url: "../assets/images/scum.jpg",
    },
  ];

}
