import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-path-param',
  standalone: true,
  imports: [],
  templateUrl: './path-param.component.html',
  styleUrl: './path-param.component.css'
})
export class PathParamComponent implements OnInit{
  id!:string|null;
  constructor(private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    // or 
    this.activatedRoute.paramMap.subscribe((param)=>{
      console.log(param.get("id"));
    })
  }
  
}
