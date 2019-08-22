import { Component,OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import {post} from './classpost'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements  OnInit {
  name = 'Angular';
 public  data=[];
  constructor(private apiser:ApiServiceService)
  {

  }
  ngOnInit()
  {
    this.apiser.getPost().subscribe(
      data=>{
this.data=data;
      }
    );
  }
}
