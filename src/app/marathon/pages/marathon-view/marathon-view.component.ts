import { Component } from '@angular/core';
import {TableMarathonComponent} from "../../components/table-marathon/table-marathon.component";

@Component({
  selector: 'app-marathon-view',
  standalone: true,
  imports: [
    TableMarathonComponent
  ],
  templateUrl: './marathon-view.component.html',
  styleUrl: './marathon-view.component.css'
})
export class MarathonViewComponent {

}
