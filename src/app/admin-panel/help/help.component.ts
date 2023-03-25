import { Component, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent  {
  liveRes:boolean=false;
  viewCondi:boolean = false;
  viewCondi2:boolean = false;
  viewCondi3:boolean = false;
  headingResult:any;
  datayear:any;
  datamonth:any;
  datamarket:any;
  private mainURL= "https://ajay-bbdd1-default-rtdb.firebaseio.com/Old_Records/"
  viewresult:any;
  Banda_Express:any= [ ];
  Delhi_Bazar:any= [ ];
  Disawar:any= [ ];
  Faridabad:any= [ ];
  Gali:any= [ ];
  Ghaziyabaad:any= [ ];
  Hamirpur_express:any= [ ];
  Shri_Ganesh:any= [ ];
  constructor(private _http:HttpClient){
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    console.log();
  }
  getResult(){
    this.liveRes = true;
    this.viewresult = this.mainURL+this.datayear+"/"+this.datamonth+".json"
    console.log(this.viewresult);
    this._http.get(this.viewresult).subscribe(res=>{
      const dataTable = Object.values(res)
      console.log(dataTable);
      
      this.Banda_Express = dataTable[0]
      this.Delhi_Bazar = dataTable[1]
      this.Disawar = dataTable[2]
      this.Faridabad = dataTable[3]
      this.Gali = dataTable[4]
      this.Ghaziyabaad = dataTable[5]
      this.Hamirpur_express = dataTable[6]
      this.Shri_Ganesh = dataTable[7]

    })
  }
  dataYear(data:any){
    this.viewCondi = true;
    console.log(data.value);
    this.datayear = data.value;
  }
  dataMoney(data:any){
    this.viewCondi2 = true;
    console.log(data.value);
    this.datamonth = data.value;
  }


}
