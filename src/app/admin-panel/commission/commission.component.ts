import { Component } from '@angular/core';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent {
  constructor(){}
  queNumMin:any  = 1;
  queNumMax:any = 1;
  result:any  = 0;

  ngOnInit(){
   
    for (let index = this.queNumMin; index <= this.queNumMax; index++) {
          this.result = index
          console.log(this.result);
          // window.location.reload();  
      }
  }

}
