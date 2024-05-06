import { Component, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { CommonModule} from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {ParticipantsEntity} from "../../../shared/model/participants.entity";
import {MarathonService} from "../../../shared/services/marathon.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [MarathonService],
})
export class HomeComponent implements OnInit {
  firstParticipant: ParticipantsEntity | null = null;

  constructor(private marathonService: MarathonService) { }

  ngOnInit(): void {
    this.marathonService.getFirstParticipant().subscribe((participant: ParticipantsEntity) => {
      this.firstParticipant = participant;
    });
  }

}
