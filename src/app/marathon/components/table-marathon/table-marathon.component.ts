// This file contains the Angular component TableMarathonComponent, which is used to display a table of marathon participants.
// Purpose: Display marathon participant data in a table using Angular Material.
// Author: [Jeremy Joel Quispe Andia]

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MarathonService} from "../../../shared/services/marathon.service";
import {ParticipantsEntity} from "../../../shared/model/participants.entity";
import {CenterEntity} from "../../model/center.entity";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {CenterService} from "../../services/center.service";

@Component({
  selector: 'app-table-marathon',
  standalone: true,
  imports: [MatTableModule, MatSort, MatSortHeader, HttpClientModule, MatPaginator, CommonModule, MatFormField, MatInput],
  templateUrl: './table-marathon.component.html',
  styleUrl: './table-marathon.component.css',
  providers: [MarathonService, CenterService]
})
export class TableMarathonComponent implements OnInit{
  displayedColumns: string[] = ['participantId', 'firstName', 'lastName', 'marathonCenterName', 'ranking', 'recordTime'];
  dataSource: MatTableDataSource<ParticipantsEntity>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private marathonService: MarathonService,private centerService: CenterService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.centerService.getMarathonCenters().subscribe((centers: CenterEntity[]) => {
      this.marathonService.getListParticipants().subscribe((participants: ParticipantsEntity[]) => {
        participants.forEach(participant => {
          const center = centers.find(c => c.id === participant.centerId);
          if (center) {
            participant.marathonCenterName = center.name;
          }
        });

        this.dataSource.data = participants;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        // Check if this.dataSource.paginator is defined before attempting to access _intl
        if (this.dataSource.paginator && this.dataSource.paginator._intl) {
          this.dataSource.paginator._intl.itemsPerPageLabel = 'Items por página';
        }
      });
    });
  }

  applyFilter(value: string) {
    value = value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

}
