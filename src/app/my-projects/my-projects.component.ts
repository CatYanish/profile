import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  template: `
    <mat-card>
      <h1 fxLayoutAlign="center center">
        My Projects
      </h1>
      <div fxLayoutAlign="center center" fxLayout="row" fxLayout.xs="column">
        <img class="groupProject" fxLayout="column" src="../assets/GroupProjectPhoto.png"/>
        <p fxLayout="column" fxFlex="50%" fxFlexOffset="5">
          Mobility For All is like "Uber for People with Disabilities".
          Mobility For All is a full-stack mobile-friendly web application, developed
          as a prototype by me and my teammates at Prime Digital Academy.
          We used a variety of Google Maps APIs, socket.io, and JavaScipt and PostgreSQL
          to bring the idea to life in a three week sprint.
        </p>
      </div>
    </mat-card>
    <mat-card>
      <div fxLayoutAlign="center center" fxLayout="row" fxLayout.xs="column">
        <p fxLayout="column" fxFlex="50%">
        HouseFull is a MEAN stack application I built with the idea of helping roommtes get along.
        It features a happy color pallete and a simple mobile-responsive interface where housemates
        can share notes and post house chore info.
        </p>
        <img fxLayout="column" fxFlexOffset="5" src="../assets/SoloProjectPhoto.png"/>
      </div>
    </mat-card>
  `,
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
