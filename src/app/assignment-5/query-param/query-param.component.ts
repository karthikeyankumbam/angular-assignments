import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param',
  standalone: true,
  imports: [],
  templateUrl: './query-param.component.html',
  styleUrl: './query-param.component.css'
})
export class QueryParamComponent implements OnInit{
  title!:string|null;
  language!:string|null;
  constructor(private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.title=this.activatedRoute.snapshot.queryParamMap.get("title")
    // or 
    this.activatedRoute.queryParamMap.subscribe((param)=>{
      console.log(param.get("language"));
      this.language=param.get("language")
    })
  }
  
}
