import { Component } from '@angular/core';
import { MedecinComponent } from '../medecin/medecin.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

    closeModal(){
      const modalDiv = document.getElementById('myModal')
    if (modalDiv != null) {
      modalDiv.style.display ="none";
    }
       
    }
}
