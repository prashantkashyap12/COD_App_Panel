import { Component } from '@angular/core';

@Component({
  selector: 'app-reffer-earn',
  templateUrl: './reffer-earn.component.html',
  styleUrls: ['./reffer-earn.component.css']
})
export class RefferEarnComponent {

  RefferId:any;
  constructor(){}
  ngOnInit(){
    this.RefferId = localStorage.getItem("userId")
  }

}
