import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-passmod',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './passmod.component.html',
  styleUrl: './passmod.component.scss'
})
export class PassmodComponent {

    constructor(
      private api: ApiService
    ){}

  updateP(){

  }
}
