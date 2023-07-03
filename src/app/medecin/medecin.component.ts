import { Component } from '@angular/core';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent {
 displayModal = false

  public displayDetail(){
      this.displayModal = true
      console.log(this.displayModal)
  }
}
