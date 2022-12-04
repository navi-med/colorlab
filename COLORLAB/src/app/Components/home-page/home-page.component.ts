import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }


  ngAfterViewInit(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instance = M.Carousel.init(elems, {
        indicators: true,
        fullWidth: true,
      
      });
    });
  }
}
