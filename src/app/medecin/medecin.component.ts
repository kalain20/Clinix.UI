import { Component } from '@angular/core';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent {
 

 

  closeModal(){
    const modalDiv = document.getElementById('myModal')
  if (modalDiv != null) {
    modalDiv.style.display ="none";
  }
     
  }
}
