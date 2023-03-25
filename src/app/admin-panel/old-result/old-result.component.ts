import { Component } from '@angular/core';

@Component({
  selector: 'app-old-result',
  templateUrl: './old-result.component.html',
  styleUrls: ['./old-result.component.css']
})
export class OldResultComponent {

  dataYear(data:any){
    console.log(data);
  }
  dataMoney(data:any){
    console.log(data);
  }
  getmarket(data:any){
    console.log(data)
  }

}
