import { Component, OnInit } from '@angular/core';
import { GetapiService } from './getapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GetMethod';
  data:any;
  constructor(private service: GetapiService){}
  ngOnInit() {
   this.GetData();
  }

  GetData(){
    this.service.GetApiData().subscribe(res=>{
      console.log("Test", res);
      this.data = res;
    });
  }
}
