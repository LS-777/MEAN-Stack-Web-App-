import { Component, OnInit, EventEmitter } from '@angular/core';
import { EventModel } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {

  events: any;


  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents().subscribe(res => {
      this.events = res;
    });
  }

  onSelect(proj: EventModel) {    // opens the edit event form within the event-center component
    this._eventService.selectedEvent = proj;
    console.log(proj);
  }
}
