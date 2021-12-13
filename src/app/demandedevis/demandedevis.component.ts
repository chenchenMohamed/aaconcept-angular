import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandedevis',
  templateUrl: './demandedevis.component.html',
  styleUrls: ['./demandedevis.component.css']
})
export class DemandedevisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideIndex = 1

  showDivs(slideIndexSuivant) {
 
    var x = document.getElementsByClassName("block1");
    
    if (slideIndexSuivant > x.length){
      slideIndexSuivant = 1
    }else if (slideIndexSuivant < 1){
      slideIndexSuivant = x.length
    }
  
    for (let i = 0; i < x.length; i++) {
      x[i].setAttribute("style", "transform :translateX("+(-100 * (slideIndexSuivant-1))+"%)")
    }
  
    this.slideIndex = slideIndexSuivant
  
  }

}
